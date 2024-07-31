// 리액트 공식문서 예제 이미지 링크
// https://i.imgur.com/YfeOqp2s.jpg

// 내 개인 이미지 링크
// https://tvstore-phinf.pstatic.net/20210907_263/1631002069199vDKNA_JPEG/00033.jpg

// export function getImgUrl(person, size = '_JPEG/00033') {
//     return (
//         'https://tvstore-phinf.pstatic.net/' +
//         person.imageId +
//         size +
//         '.jpg'
//     );
// }

export function getImgUrl(person) {
    return (
        'https://tvstore-phinf.pstatic.net/' +
        '20210907_263/1631002069199vDKNA_JPEG/00033.jpg'
    );
}