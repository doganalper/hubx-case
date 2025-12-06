export const loadImage = (imageUrl: string) =>
    new Promise((resolve) => {
        const loadImg = new Image();
        loadImg.src = `src/images/${imageUrl}`;
        resolve(loadImg.src);
    });