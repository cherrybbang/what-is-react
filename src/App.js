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
// export default function ToDoList() {
//   return (
//     <>
//       <h1 className="jsx">JSX 연습</h1>
      
//       <ul>
//         <li>안녕!</li>
//         <li>내 이름은 박지유!</li>
//         <li>만나서 반가워!</li>
//       </ul>
//     </>
//   )
// }

// 4. JSX + curly braces
// const person = {
//   name : '지유',
//   theme : {
//     backgroundColor : '#ccc',
//     color : 'orange'
//   }
// };

// export default function List() {
//   return (
//     <div style={person.theme}>
//       <h2>{person.name}'s List</h2>

//       <ul>
//         <li>안녕!</li>
//         <li>내 이름은 박지유!</li>
//         <li>만나서 반가워!</li>
//       </ul>
//     </div>
//   )
// }

// 5. 컴포넌트에 props 넘겨주기
// import {getImgUrl} from './card.js';

// export default function IDCard() {
//   return (
//     // <Card>
//       // <h1>Hi</h1>
//       <Avatar
//         // size = {100}
//         person = {{
//           name : '짱구',
//           imageId : '20210907_263/1631002069199vDKNA'
//         }}
      
//       />
//     // </Card>
//   );
// }

// function Avatar({person, size}) {
//   return (
//     <img
//       className="avatar"
//       src={getImgUrl(person)}
//       alt={person.name}
//       // width={size}
//       // height={size}
//     />
//   );
// }

// function Card({children}) {
//   return (
//     <div className="card">
//       {children}
//     </div>
//   );
// }

// 6. 조건부 렌더링
// function Item({name, isPacked}) {
//   return (
//     <li className='item'>
//       {name} {isPacked && '!'}
//     </li>
//   );
// }

// export default function PackingItem() {
//   return (
//     <section>
//       <h1>지유의 List</h1>
//       <ul>
//         <Item
//           isPacked={true}
//           name='우주복'
//         />
//          <Item
//           isPacked={true}
//           name='헬맷'
//         />
//          <Item
//           isPacked={false}
//           name='산소통'
//         />
//       </ul>
//     </section>
//   )
// }

// Multiple 렌더링
import {people} from './people';
import { getImgUrl } from './card';

export default function MultipleList() {
  const listItems = people.map(person =>
    <li key={person.id}>
      <img
        src={getImgUrl(person)}
        alt={person.name}
      />
      <p>
        <b>{person.name}</b>
        <br/>
        {person.profession}
        <br/>
        known for {person.accomplishment}
      </p>
    </li>
  );
  return (
    <article>
      <h1>Scientists</h1>
      <ul>{listItems}</ul>
    </article>
  )
}