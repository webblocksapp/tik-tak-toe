import { Cross } from '.';

describe('Cross', () => {
  const canvas = document.createElement('div');

  it('Should render a red cross', () => {
    canvas.innerHTML = Cross({ color: 'red' });
    const cross = canvas.firstElementChild;
    expect(cross.style.color).toBe('red');
  });

  it('Should render a blue cross', () => {
    canvas.innerHTML = Cross({ color: 'blue' });
    const cross = canvas.firstElementChild;
    expect(cross.style.color).toBe('blue');
  });

  it('Should render a big cross', () => {
    canvas.innerHTML = Cross({ size: 'big' });
    const cross = canvas.firstElementChild;
    expect(cross.classList.contains('shape-big')).toBe(true);
  });
});
