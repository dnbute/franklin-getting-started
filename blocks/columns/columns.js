import { createOptimizedPicture } from '../../scripts/lib-franklin.js';
export default function decorate(block) {
    const cols = [...block.firstElementChild.children];
    block.classList.add(`columns-${cols.length}-cols`);
  
    // setup image columns
    [...block.children].forEach((row) => {
      [...row.children].forEach((col) => {
        const pic = col.querySelector('picture');
        if (pic) {
          const picWrapper = pic.closest('div');
          if (picWrapper && picWrapper.children.length === 1) {
            // picture is only content in column
            picWrapper.classList.add('columns-img-col');
          }
        }
      });
    });

    const row = block.children[0];

    [...row.children].forEach((element) => {
        let anchor = element.querySelector('a');
        if (anchor) {
            anchor.classList.remove('button');
        }
    })

  block.querySelectorAll('img').forEach((img) => {
    img.closest('picture').replaceWith(createOptimizedPicture(img.src, img.alt, false, [{ width: '750' }]))
  });
  }