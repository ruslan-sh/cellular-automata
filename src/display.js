/* global shuffle */

/* exported Display */
class Display {
  constructor(conf) {
    this.size = conf.size;
    this.zoom = conf.zoom;
    this.colors = conf.colors;

    this.canvas = document.getElementById("canvas");
    this.canvas.height = this.size * this.zoom;
    this.canvas.width = this.size * this.zoom;
    this.context = canvas.getContext("2d");
  }

  drawRow(rowIndex, row) {
    const y = rowIndex * this.zoom;
    for (let i = 0; i < row.length; i++) {
      const x = i * this.zoom;
      this.context.fillStyle = this.colors[row[i]];
      this.context.fillRect(x, y, this.zoom, this.zoom);
    }
  }

  shiftUp(rowsCount) {
    const imageData = this.context.getImageData(
      0,
      rowsCount * this.zoom,
      this.canvas.height,
      this.canvas.width
    );
    this.context.putImageData(imageData, 0, 0);
  }

  static getRandomColors() {
    const colors = [
      "#FAFAFA", // black
      "#212121", // white
      "#F44336", // red
      "#4CAF50", // green
      "#2196F3", // blue
      "#FFEB3B", // yellow
      "#9C27B0", // purple
      "#00BCD4", // cyan
    ];
    return shuffle(colors);
  }
}
