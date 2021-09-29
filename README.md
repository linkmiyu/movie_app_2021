# 유진현 201840220

## [ 09월 29일]

    branch 사용하기
        github branch 예시 
        branch를 사용해서 메인인 master에서 작업하는게 아닌 작업을 따로 한후 작업이 완료 되면 master에 커밋해서 작업하는 방법

![git-branches-merge](https://user-images.githubusercontent.com/79895978/135209061-0511a87a-89f8-454e-94a0-736f51dd7a66.png)

    props 는 정적인 데이터만 사용 state는 동적인 데이터를 사용
    state는 class형 컴포넌트에서 사용하게 됨

    'onClick={this.name}'을 통해서 클릭시 이벤트 처리를 할수 있다

    생명 주기 함수

![제목 a없음](https://user-images.githubusercontent.com/79895978/135222287-38530aea-d395-4fa2-a656-a564f1466464.png)

    위 사진중 힌색박스안에 있는 명령어에 경우 사라질 예정이니 사용 자제

![생성자](https://user-images.githubusercontent.com/79895978/135223891-d509699e-d495-4528-85b5-872dd37ee943.png)


## [ 09월 15일]

    리액트 기초 개념 
    <props>
        컴포넌트에서 컴포넌트로 전달하는 데이터 함수의 매개변수 역활을 함
            <Food fav = "kimchi" somethig = {ture} papapa = {'hello'} />

            function Food(foo)) {
                const { fav } = props
                return <h1>I like {fav}.</h1>
            }
        이러면 I like kimchi. 가 나오게 됨

        const foodLik = [ {name: "", image: ""} ]
    
    리스트의 각 원소는 유일한 key prop를 가져야 한다

## [ 09월 08일 ]

    favicon
     웹탭에 있는 작은 아이콘

    수정시 꼭 확인(실행)해보기
    무슨 오류가 생겼는지 나중에 가서는 확인이 어려움

    return 태그는 ()가 무조건 붙는다고 생각하면 편함

    document.getElementById('ID')
     id가 ID인 친구에게 보내주기

    컴포넌트
     function으로 정의 내린 곳을 컴포넌트(component)라고 함

     외부파일에서 사용하기 위해 export default "null" 을 사용해야함

     ';'를 끝에 안붙여줘도 오류가 생기지 않음
     