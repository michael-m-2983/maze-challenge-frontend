// class MazeData {

//     id: number;
//     size: number;
//     text: string;
//     image: string;
//     level: string;

//     constructor(id: number, size: number, text: string, image: string, level: string) {
//         this.id = id;
//         this.size = size;
//         this.text = text;
//         this.image = image;
//         this.level = level;
//     }
// }

// interface Backend {
//     generateMaze: (id: number, size: number, level: string) => Promise<MazeData>
// }

// class RealBackend implements Backend {
//     generateMaze(id: number, size: number, level: string): Promise<MazeData> {
//         let data = fetch(``)
//     }
// }