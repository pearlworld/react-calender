import React from 'react'

function Calender() {
  // 날짜 조회하기
  let d = new Date();
  let year = d.getFullYear(); // 년도
  let month = d.getMonth(); // 월
  let date = d.getDate(); // 일
  console.log(year, month, date);

  // 말일 구하기(다음달 기준으로 0하면 말일)
  let lastDate = new Date(year, month + 1, 0).getDate();
  // 달력애서 1일이 시작할 위치(요일값 = 0...6)
  let start_date = new Date(year, month, 1).getDay();
  console.log(lastDate, start_date);

  return (
    <div className='calender'>
            <header>
                <h3>{year}</h3>
                <span>{month + 1}월</span>
            </header>
            <main>
                <ul className='date'>
                    {
                        Array(lastDate).fill().map((_, i) => {
                            return (
                                <li key={i}>{i + 1}</li>
                            )
                        })
                    }
                </ul>
            </main>
    </div>
  )
}

export default Calender