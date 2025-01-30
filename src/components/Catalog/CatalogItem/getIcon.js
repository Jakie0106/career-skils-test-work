export const getIcons = (items) => {
  const capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1);
  const icons = {
    AC: items.AC ? { icon: "wind", label: "Air Conditioning" } : null,
    bathroom: items.bathroom ? { icon: "shower", label: "Bathroom" } : null,
    kitchen: items.kitchen ? { icon: "cup-hot", label: "Kitchen" } : null,
    TV: items.TV ? { icon: "tv", label: "Television" } : null,
    radio: items.radio ? { icon: "radio", label: "Radio" } : null,
    refrigerator: items.refrigerator
      ? { icon: "fridge", label: "Refrigerator" }
      : null,
    microwave: items.microwave
      ? { icon: "microwave", label: "Microwave" }
      : null,
    gas: items.gas ? { icon: "gas", label: "Gas" } : null,
    water: items.water ? { icon: "water", label: "Water" } : null,
    transmission: items.transmission
      ? { icon: "diagram", label: capitalize(items.transmission) }
      : null,
    engine: items.engine
      ? { icon: "fuel", label: capitalize(items.engine) }
      : null,
  };
  return Object.values(icons).filter((icon) => icon !== null);
};
