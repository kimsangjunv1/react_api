import React from "react";

// const referInfo = [
//     {
//         num: 1,
//         name: "accent-color",
//         desc: "특정 요소에 색상을 지정할 때 사용됩니다.",
//         star: "★★★★★"
//     },
//     {
//         num: 2,
//         name: "align-content",
//         desc: "콘텐츠 아이템의 상하관계 정렬 상태를 설정합니다.",
//         star: "★★★★★"

//     },
//     {
//         num: 3,
//         name: "align-items",
//         desc: "콘텐츠 아이템의 내부 상하관계 정렬 상태를 설정합니다.",
//         star: "★★★★★"

//     },
//     {
//         num: 4,
//         name: "align-self",
//         desc: "개별적인 콘텐츠 아이템의 정렬 상태를 설정합니다.",
//         star: "★★★★★"

//     },
//     {
//         num: 5,
//         name: "all",
//         desc: "요소의 속성을 초기화 또는 상속을 설정합니다.",
//         star: "★★★★★"

//     },
//     {
//         num: 6,
//         name: "animation",
//         desc: "애니메이션과 관련된 속성을 일괄적으로 설정합니다.",
//         star: "★★★★★"

//     },
//     {
//         num: 7,
//         name: "animation-delay",
//         desc: "애니메이션 지연 시간을 설정합니다.",
//         star: "★★★★★"

//     },
//     {
//         num: 8,
//         name: "animation-direction",
//         desc: "애니메이션 움직임 방향을 설정합니다.",
//         star: "★★★★★"

//     },
//     {
//         num: 9,
//         name: "animation-duration",
//         desc: "애니메이션 움직임 시간을 설정합니다.",
//         star: "★★★★★"

//     },
//     {
//         num: 10,
//         name: "animation-fill-mode",
//         desc: "애니메이션이 끝난 후의 상태를 설정합니다.",
//         star: "★★★★★"

//     },
//     {
//         num: 11,
//         name: "animation-iteration-count",
//         desc: "애니메이션의 반복 횟수를 설정합니다.",
//         star: "★★★★★"

//     }
// ]

// const ReferText = ({num, name, desc, star}) => {
//     // return <ul><li>{text}</li></ul>
//     return (
//         <li>
//             <a href="/">
//                 <span className="num">{num}</span>
//                 <span className="name">{name}</span>
//                 <span className="desc">{desc}</span>
//                 <span className="star">{star}</span>
//             </a>
//         </li>
//     )
//   }

const ReferCont = ({ references }) => {
  console.log({ references }); //데이터 가는지 확인 중괄호 꼭 사용하기
  return (
    <section className="cont__refer">
      <div className="container">
        <div className="refer__inner">
          <h2>CSS</h2>
          <ul className="refer__list">
            {/* {referInfo.map((info) => (
              <ReferText
                num={info.num}
                name={info.name}
                desc={info.desc}
                star={info.star}
              />
            ))}
            <li>
                        <a href="/">
                            <span className="num">01</span>
                            <span className="name">background</span>
                            <span className="desc">백그라운드의 속성을 설정합니다.</span>
                            <span className="star">★★★★★</span>
                        </a>
                    </li> */}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default ReferCont;
