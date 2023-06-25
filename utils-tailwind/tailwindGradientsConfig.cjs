const gradients = {
  'primary-dark': ['#fe9fb2', '#8E35F2'],
  'primary-light': ['#e83699', '#8E35F2'],
  'secondary-dark': ['#9ad4ff', '#e3e4e5'],
  'secondary-light': ['#286cf2', '#858484'],
};

const gradientUtilities = Object.entries(gradients).map(([key, colors]) => ({
  [`.gradient-${key}`]: {
  backgroundImage: `radial-gradient(circle at top left, ${colors[0]}, ${colors[1]})`,
  },
}));

module.exports = gradientUtilities;
