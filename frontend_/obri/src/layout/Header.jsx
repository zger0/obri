import './Header.scss'

function Header({count}) {
  
	return (
		<>
			<header id={'header'}>
				테스트 헤더 추가dddd<br></br>
				상속 테스트 {count}
				<div className="test">
					큰글씨
				</div>
			</header>
		</>
	)
  }
  
  export default Header