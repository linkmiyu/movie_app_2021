# 유진현 201840220

## [ 09월 29일]

    branch 사용하기
        github branch 예시 
   ![git-branches-merge](https://user-images.githubusercontent.com/79895978/135209061-0511a87a-89f8-454e-94a0-736f51dd7a66.png)
        branch를 사용해서 


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
     
