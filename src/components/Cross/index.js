const defaultProps = { color: 'green', size: 'medium' };

export const Cross = (props = defaultProps) => {
  const { color, size } = { ...defaultProps, ...props };
  const sizes = {
    small: 'shape-small',
    medium: 'shape-medium',
    big: 'shape-big',
  };

  return /*html */ `<div class="x-shape ${sizes[size]}" style="color: ${color}">X</div>`;
};
