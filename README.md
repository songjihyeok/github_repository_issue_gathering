# CRA 로 제작

 본 프로젝트는 github api를 활용하는 프로젝트이기에 .env.develop 파일을 루트에 생성 이후, 

 GITHUB_PRIVATE_KEY = GITHUB_API_KEY

위와 같은 환경 변수를 저장이 필요합니다. 


* 주의
liked 페이지의 첫 로딩이 좀 느릴 수 있습니다. 모든 등록한 repo의 최신 데이터를 하나씩 가져오는 과정으로 인해 등록한 repo가 많을 경우 시간이 좀 걸립니다. 
그리고 github api 특성상 request를 많이 날리면 금방 한계치에 도달합니다. 


### `npm install` 

node modules 설치를 위해 해당 스크립트 실행 필요

### `npm start`

[http://localhost:3000](http://localhost:3000)에 접속

### 요청사항 구현 완료 
1. 검색창에 Repository명을 입력해서 Repository를 검색할 수 있다. 
> /home 에서 검색 가능

2. 검색된 Public Repository를 등록할 수 있다.
    - 등록 개수는 최대 4개로 제한하며, 최대 개수 초과 등록 시 이를 사용자에게 알려준다.
     > alert로 알려줌
    - 웹은 LocalStorage, 앱은 Async Storage 등 로컬 저장소를 활용한다. (웹 혹은 앱 선택)
    > localStorage 활용 저장

3. 등록된 Repository를 삭제할 수 있다.
    > liked Button 다시 누르면 삭제

4. 등록된 각각의 Public Repository의 issue를 한 페이지에서 모아서 볼 수 있다.
     > /liked 페이지에서 확인 가능
    - 각 issue 마다 제목, Repository 명은 필수로 표현되어야 한다. 그 이외의 데이터 중 필요하다고 생각되는 부분은 추가한다.
     > 깃헙 레포마다 issues 버튼이 있으며 누르면 리스트가 나옴

    - 해당 issue를 클릭하면 Github의 상세 페이지로 이동할 수 있다.
    > 외부로 링크 상세 페이지 이동

    - 페이지네이션을 통해서 계속해서 issue를 모아서 볼 수 있다.
    > 페이지네이션 개발 완료