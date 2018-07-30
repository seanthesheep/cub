import { TestWindow } from '@stencil/core/testing';
import { CubHeader } from './cub-header';

describe('cub-header', () => {
  it('should build', () => {
    expect(new CubHeader()).toBeTruthy();
  });

  describe('rendering', () => {
    let element: HTMLCubHeaderElement;
    let testWindow: TestWindow;
    beforeEach(async () => {
      testWindow = new TestWindow();
      element = await testWindow.load({
        components: [CubHeader],
        html: '<cub-header></cub-header>'
      });
    });

  });
});
