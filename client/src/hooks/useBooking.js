import { useMemo, useState } from "react";
import { STANDARD_TESTS, COMBOS, PACKAGES } from "../data/testsData";
import { CUSTOM_TESTS } from "../data/customTests";

export const ALL_TESTS = [...STANDARD_TESTS, ...CUSTOM_TESTS];

/**
 * Central booking state: which tests/packages are selected,
 * plus derived line items + total (with combo pricing applied).
 */
export function useBooking() {
  const [selectedIds, setSelectedIds] = useState(() => new Set());

  const toggleTest = (testId) => {
    setSelectedIds((prev) => {
      const next = new Set(prev);
      if (next.has(testId)) next.delete(testId);
      else next.add(testId);
      return next;
    });
  };

  const togglePackage = (pkgId) => {
    toggleTest("package:" + pkgId);
  };

  const isSelected = (id) => selectedIds.has(id);

  const { items, total } = useMemo(() => {
    const items = [];
    let total = 0;

    const selectedTestOnlyIds = new Set(
      [...selectedIds].filter((id) => !id.startsWith("package:"))
    );

    // Which combos are fully satisfied by the selected tests?
    const combosApplied = [];
    const idsCoveredByCombo = new Set();
    COMBOS.forEach((combo) => {
      const allSelected = combo.ids.every((id) => selectedTestOnlyIds.has(id));
      if (allSelected) {
        combosApplied.push(combo);
        combo.ids.forEach((id) => idsCoveredByCombo.add(id));
      }
    });

    selectedIds.forEach((id) => {
      if (id.startsWith("package:")) {
        const pkgId = id.replace("package:", "");
        const pkg = PACKAGES.find((p) => p.id === pkgId);
        if (pkg) {
          items.push({ name: pkg.name + " (Package)", price: pkg.price });
          total += pkg.price;
        }
      } else if (!idsCoveredByCombo.has(id)) {
        const test = ALL_TESTS.find((t) => t.id === id);
        if (test) {
          items.push({ name: test.name, price: test.price });
          total += test.price;
        }
      }
    });

    combosApplied.forEach((combo) => {
      items.push({ name: combo.name + " (Combo)", price: combo.price });
      total += combo.price;
    });

    return { items, total };
  }, [selectedIds]);

  const resetSelection = () => setSelectedIds(new Set());

  return {
    isSelected,
    toggleTest,
    togglePackage,
    items,
    total,
    resetSelection,
  };
}
