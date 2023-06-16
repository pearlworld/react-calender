import React from 'react'

function Calender(props) {
  // props에서 연, 월, 일 가져오기
  // let year = props.year;
  // let month = props.month;
  // let date = props.date; >> 아래처럼 간단히
  let { year, month, date } = props;

  // 날짜 조회하기
  let d = new Date();
  // let year = d.getFullYear(); // 년도
  // let month = d.getMonth(); // 월
  // let date = d.getDate(); // 일
  // console.log(year, month, date); >> App.jsx의 props로 넘겨주기

  // 말일 구하기(다음달 기준으로 0하면 말일)
  let lastDate = new Date(year, month + 1, 0).getDate();
  // 달력애서 1일이 시작할 위치(요일값 = 0...6)
  let start_date = new Date(year, month, 1).getDay();
  console.log(lastDate, start_date);

  return (
    <div className='calender'>
      <header>+
        <span>{month + 1}월</span>
        <h3>{year}</h3>
      </header>
      <main>
        <ul className='date'>
          {/* 시작 빈칸 */}
          {
            Array(start_date).fill().map((_, i) => {
              return (
                <li ley={i}></li>
              )
            })
          }
          {
            Array(lastDate).fill().map((_, i) => {
              return (
                <li 
                  style={{
                    backgroundColor: date === i+1 ? 'rgba(255, 255, 255,.3' : '',
                    borderRadius: date === i + 1 ? '10px' : '0'
                  }}
                  key={i}>{i + 1}</li>
              )
            })
          }
        </ul>
      </main>
    </div>
  )
}

export default Calender