# :smiley: Team01 Backend Repository

1팀 백엔드 저장소입니다.

포크 뜨세요!

## 📁 브랜치 관리

- `master`
    - 배포 가능한 상태만을 관리합니다.
    - 팀장님만 : `dev` >> `master`
- `dev`
    - 기능 개발을 위한 브랜치들을 병합하기 위해 사용합니다.
    - 모든 기능이 추가되고 버그가 수정되어 배포 가능한 안정적인 상태인 경우에만 `master`에 병합합니다.
- `feature`
    - `dev` 브랜치에서 새로운 기능에 대한 `feature` 브랜치를 분기합니다.
    - 새로운 기능에 대한 작업 수행이 끝나면 `dev` 브랜치로 병합합니다.
    - 더 이상 필요하지 않은 `feature` 브랜치는 삭제합니다.
    - 중앙 원격 저장소에 올리기(`push`) 전에 `pull` 땡겨와서 `merge conflict` 해결해줍니다.
    - `feature/기능요약` : `feature/login`
    ```
    git checkout -b feature/login develop
    /* 새로운 기능 작업 수행, add, commit, add, commit, ... */ 
    git checkout develop
    git merge --no-ff feature/login
    git branch -d feature/login
    git push origin develop
    ```

## 💦 참고

[Git 브랜치의 종류](https://gmlwjd9405.github.io/2018/05/11/types-of-git-branch.html)

[자주 사용되는 Git 명령어](https://www.holaxprogramming.com/2018/11/01/git-commands/)

[프로젝트 fork 하는 법](https://salix97.tistory.com/223)
