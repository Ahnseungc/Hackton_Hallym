[한림대학교**]오픈소스웹해커톤(금상) 🥇**

<img src="https://www.notion.so/f3d7d9d057884b1babafccb76d4ea12a?pvs=4#b4da7db8b2b04f298ae92a20cae9e480"/>

**🔎** 목적 및 필요성

![스크린샷 2024-01-23 오후 10.48.23.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/4d825104-fe89-4ebe-9308-342789c00893/05aa10ca-5485-4c6e-83d6-1584d95353ea/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA_2024-01-23_%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE_10.48.23.png)

기존 중고거래 플랫폼의 대면 거래의 범죄 노출이 증가한다는 기사가 많이 보였습니다. 그래서 직거래에서 범죄 노출을 줄이기 위해 재학생을 위한 “플리 한림” 을 제작하게 되었습니다.

**📌 주요 기능**

**세이프존**

![Untitled](https://prod-files-secure.s3.us-west-2.amazonaws.com/4d825104-fe89-4ebe-9308-342789c00893/2bf0bad1-6e45-4228-99b3-ea90e22e4d9e/Untitled.png)

교내의 CCTV와 인적이 많고 밝은 곳을 선정하여 희망 거래지역을 정할 수 있는 “세이프존”을 만들었습니다.

상품을 올릴 때 세이프존을 이미지캐러셀를 통하여 선택 할 수 있습니다.

**채팅**

![스크린샷 2024-01-23 오후 10.51.54.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/4d825104-fe89-4ebe-9308-342789c00893/9cf3375f-f067-4d3d-87c2-530cc7675779/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA_2024-01-23_%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE_10.51.54.png)

이용자간의 상호 소통을 위해서 채팅 기능과 채팅방 별로 저장 할 수 있는 기능을 만들었습니다.

Sendbrid Api 와 [Socket.io](http://Socket.io) 를 통해서 제작 하였습니다

**상품의 시세를 조회**

![스크린샷 2024-01-23 오후 10.53.33.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/4d825104-fe89-4ebe-9308-342789c00893/d4e73840-51f7-4939-ac8c-3555f7a10af5/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA_2024-01-23_%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE_10.53.33.png)

“얼마에 올리지?” 라는 고민에 도움이 되고자 등록된 상품별 시세를 조회 할 수 있게 만들었습니다.

ChartJs 를 통해 최근 10일간의 평균 시세를 확인 할 수 있습니다.

[역할] 

- 안승찬  |  Front
- 최세형  |  Back

 **⚙️ 사용 기술**

Front | Ts, NextJs, Sendbird, ChartJs, SWR

Back | NextJs

Git | https://github.com/Ahnseungc/Hackton_hallym
