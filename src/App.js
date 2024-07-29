// 1. 기본 컴포넌트 연습
// function Profile() {
//   return (
//     <img
//     src="https://i.pinimg.com/736x/b5/9d/8f/b59d8f8cbb54368862109db8324dc6b8.jpg"
//     alt="짱구이미지"
//     />
//   );
// }

// export default function Gallery() {
//   return (
//     <section>
//       <h1>기본 컴포넌트 연습 1</h1>
//       <Profile />
//       <Profile />
//       <Profile />
//     </section>
//   )
// }


// 2. 컴포넌트 import, export 연습
// import Gallery from "./Gallery";

// export default function App() {
//   return (
//     <Gallery />
//   )
// }

// 3. JSX
export default function ToDoList() {
  return (
    <>
      {/* 클래스명은 class라고 적어도 적용이 되는디..? */}
      <h1 className="jsx">JSX 연습</h1>
      
      <ul>
        <li>안녕!</li>
        <li>내 이름은 박지유!</li>
        <li>만나서 반가워!</li>
      </ul>
    </>
  )
}