export const getIcons = (items) => {
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
    // transmission: items.transmission
    //   ? { icon: "diagram", label: "Transmission" }
    //   : null,
    // engine: items.engine ? { icon: "fuel", label: "Engine" } : null,
  };
  return Object.values(icons).filter((icon) => icon !== null);
};
