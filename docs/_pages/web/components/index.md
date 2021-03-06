---
---

# Components

리디북스 서점, 리디셀렉트, 페이퍼샵에서 공통으로 사용하는 UI 컴포넌트입니다.


## 버튼(Button)

사용자가 클릭하거나 터치할 때 발생하는 동작에 대한 피드백을 제공합니다. 버튼 내 텍스트 레이블은 사용자가 명확하게 이해할 수 있도록 직관적이고 간결하게 작성합니다. 

### 종류

#### 주요 버튼(primary button)

- **Blue, E-ink black**<br>
  페이지 내에서 우선순위가 가장 높은 주요 액션 버튼으로 사용합니다.  

#### 보조 버튼(secondary button)

- **White, E-ink black line**<br>
  주요 액션 버튼이 강조되어 있는 페이지 내에서 보조 액션 버튼으로 사용합니다.  
- **Gray, E-ink gray**<br>
  페이지 내에서 다른 버튼과 사용이 겹칠 때 기능을 구분하기 위해 사용합니다.  
- **Blueline**<br>
  부가 정보 및 기능을 제공할 때 사용합니다. 

### 크기

높이 값(height) 기준으로 고정되어 있는 크기를 주변 디자인 요소에 맞게 사용합니다. 버튼의 가로폭(width)은 양 끝 영역을 패딩(padding)으로 지정하고 필요한 경우 크기를 강제할 수 있습니다.

| 버튼 크기(px) |
| ------------- |
| 21            |
| 25            |
| 30            |
| 40            |
| 50            |

### 사용

#### **아이콘 레이블 버튼(icon with label button)**

- 레이블의 의미가 명확하지 않은 경우나 버튼의 의미를 강조하는 경우에 사용합니다.  

#### **아이콘 버튼(icon only button)**

- 아이콘 만으로 쉽게 인지가 되어야 하므로 의미를 명확하게 전달할 수 있는 형태를 사용하는 것이 좋습니다.

#### **텍스트 버튼(text button)**

- 텍스트 버튼으로 사용자를 다른 페이지로 안내하거나 특정 작업을 실행할 수 있도록 돕습니다. 이때, 사용자가 누를 수 있는 버튼인지 알 수 있도록 반드시 hover 피드백을 제공합니다. 
- 텍스트 만으로 의미 전달이 어려울 경우에는 아이콘과 함께 사용하기도 합니다.

#### **토글 버튼(toggle button)**

- 두 가지 옵션을 그룹화할 때 사용합니다. 

### 그룹

기능이 다른 버튼을 같이 배치할 때, 버튼 크기와 사이 간격에 유의합니다. 또한 버튼 그룹에서 주요 버튼(primary button)을 우측 또는 상단에 위치하도록 레이아웃을 고려해야 합니다.


## 체크박스(Check Box)

- 주로 독립적으로 사용하지만, 하위에 있는 여러 항목을 일괄적으로 선택하는 데에 사용하는 상위 체크박스처럼 예외의 경우도 있습니다.
- 많은 항목을 선택해야 할 경우 툴팁(tooltips)을 띄워 사용자에게 필요한 옵션을 제공할 수 있습니다.


## 라디오 버튼(Radio Button)

- 많은 사용자가 선택하는 항목을 기본값으로 표시합니다.

## 셀렉트박스(Select Box)

- 레이블은 한 줄에 표시되도록 간략하게 작성합니다.
- 사용자에게 중요도가 높은 항목을 기본값으로 표시합니다.
- Spread 상태는 각 기기 및 OS의 네이티브 UI로 보여줍니다.


## 텍스트 인풋(Text Input)

### 종류

- #### 싱글 라인 필드(single line field)

- #### 텍스트 에어리어(text area)

### 유의사항

- 레이블은 주변 디자인 요소에 따라 플레이스홀더로 대체할 수 있습니다.
- 입력 값의 유효성을 아이콘, 텍스트 등으로 표시하여 시각적인 피드백을 제공하는 것이 좋습니다.
- 비슷한 항목은 그룹화하여 사용할 수 있습니다.

## 모달(Modal)

모달은 사용자가 특정 행동을 했을 때 이에 대한 추가적인 설명이나 결정이 필요한 경우 사용합니다. 

### 종류

#### 확인

- 사용자가 확인해야 할 정보가 있을 때, 안내 사항을 전달할 때 사용합니다. 
  - ex. 소멸 예정 리디포인트 안내, 기다리면 무료 도움말

#### 입력

- 사용자가 직접 입력해야 할 정보가 있는 경우 사용합니다.
  - ex. 회원가입, 로그인, 쿠폰 등록

#### 선택

- 다음 단계로 넘어가기 위해 사용자의 선택이 필요한 경우 사용합니다.
  - ex. 리디셀렉트 > 도서 교체, 웹뷰어 다음 화 보기 > 결제하기

### 구성

모달의 기본 구성 요소입니다. 상황에 따라 모든 요소가 포함되지 않을 수도 있습니다.

#### 헤드 영역

- 모달의 타이틀은 모달을 띄운 버튼의 레이블과 일치하는 것이 좋습니다. 

#### 바디 영역

- **제목**
  - 모달 내에서 사용자에게 강력하게 전달하고자 하는 내용을 표시합니다. 
- **본문** 
  - 머리글 만으로 전달이 어려운 경우 본문 텍스트를 추가할 수 있습니다. 내용은 짧은 시간 내에 파악할 수 있도록 간결하게 작성합니다.
- **액션 버튼**
  - 버튼 내 레이블은 사용자의 다음 행동을 명확하게 안내할 수 있어야 합니다.
  - 제공하는 버튼의 개수가 많아지지 않도록 주의해야 합니다.

#### **딤 백그라운드**

- 사용자가 모달 창에 집중할 수 있도록 시각적 알림을 제공합니다.

### 유의사항

- 사용자의 컨텍스트를 유지할 수 있도록 하는 것이 중요합니다.
- 모바일에서는 300px 이상의 크기를 사용할 경우 페이지로 보여주는 것이 좋습니다.
- 화면의 크기가 바뀌어도 화면 중앙에 위치할 수 있도록 하고, 필요한 경우에는 Y 축을 고정할 수 있습니다.
- 웹 뷰어와 관련된 모달(ex. 구매, 대여)은 적용되어 있는 테마 컬러(theme color)와 동일한 컬러로 지원합니다.


## 팝업(Popup)

사용자가 즉시 알아야 할 중요한 내용을 간단한 메시지로 전달할 때 시스템 팝업으로 노출합니다.

### 종류

#### 경고

- 사용자가 즉시 확인해야 할 정보가 있을 경우 [확인]과 같이 한 개의 버튼만 표시합니다.
  - ex. 정보 변경 > 잘못된 비밀번호 입력 시

#### 확인

- 다음 단계로 넘어가기 위한 사용자의 확인이 필요한 경우 [취소/확인]과 같이 두 개의 버튼을 표시합니다.
  - ex. 다운로드 > 앱으로 열기, 구매 목록 도서 영구 삭제


## 토스트(Toast)

카트에 책을 담거나, 비밀번호를 변경하는 등 사용자 행동에 대한 간단한 피드백을 제공할 때 사용합니다.

### 종류

#### 일반

- 사용자에게 추가 옵션을 제공하거나 일반적인 메시지를 전달합니다.

#### 성공

- 작업이 성공적으로 완료되면 사용자에게 알립니다.

#### 얼럿

- 사용자가 작업을 완료하기 전에 해결해야 하는 문제를 알립니다.

### 유의사항

- 일시적으로 나타나기 때문에 한눈에 읽히는 메시지로 작성합니다. 전달할 내용이 많을 경우 최대 2줄까지 작성할 수 있습니다.
- 메시지와 관련된 실행 취소 및 페이지 이동을 할 수 있도록 액션 버튼을 제공할 수 있습니다.
- 토스트가 사라지기 전에 사용자가 직접 해당 토스트를 닫을 수 있도록 항상 닫기 버튼을 제공합니다.
- 모바일에서 하단 고정(fixed) 영역이 있을 경우 토스트와 해당 영역이 겹치지 않도록 간격을 두어 표시합니다.


## 경고 및 안내(Caution)

 (Alert)

페이지 내에서 경고 및 안내 메시지를 전달하는 경우 사용합니다. 

### 종류

#### 경고

- 사용자가 즉시 알아야 할 내용이거나 추가적인 액션이 함께 있는 경우 사용합니다.
  - ex. 스포일러 포함 리뷰 경고

#### 안내

- 사용자에게 일반적인 메시지를 전달할 때 사용합니다.
  - ex. macOS 자동충전 이용 불가 안내

### 유의사항

- Brown 계열의 배경 컬러를 사용하는 것이 일반적이지만 주변 디자인 요소와 메시지의 목적에 따라 slate gray 계열의 배경 컬러를 사용할 수도 있습니다.
- 필요한 경우 버튼을 같이 배치하여 사용자의 다음 행동을 명확하게 안내합니다.


## 탭(Tabs)

동일한 페이지 내에서 유사한 정보를 그룹화하여 하나의 행으로 구성할 때 사용합니다. 사용자가 관련 콘텐츠에 쉽고 빠르게 접근할 수 있도록 돕습니다.

### 유의사항

- 탭 레이블은 짧고 간결해야 하며 내용을 적절하게 설명해야 합니다.
- 사용자가 페이지를 벗어나지 않고 확인할 수 있도록 레이블 뒤에 콘텐츠 관련 숫자를 같이 표기할 수도 있습니다.
- 탭의 개수는 mobile을 고려하여 6개 이하로 구성하는 것이 좋습니다.
- 탭의 순서는 사용자의 관점에서 가장 중요한 콘텐츠 순으로 나열합니다.
- Desktop에서 탭의 전체 길이는 콘텐츠 영역에 맞춰 지정합니다.
- Mobile에서 하나의 탭 크기는 전체 길이의 1/N로 지정합니다. 레이블의 길이가 많이 차이 나는 경우에는 %로 지정할 수 있습니다.


## 페이지네이션(Pagination)

많은 양의 정보를 한 번에 불러오기 어려울 때 콘텐츠를 여러 페이지로 나누고, 사용자가 특정 페이지로 이동할 수 있도록 돕습니다.

### 사용

#### Desktop
![](pagination_pc.png){:data-action='zoom'}

#### Mobile
![](pagination_mobile.png){:data-action='zoom'}

### 동작

#### 처음/끝 버튼

- **> / 끝** 버튼을 눌렀을 경우 다음 페이지네이션 순서의 가장 처음에 위치한 페이지 번호로 이동합니다.
- **< / 처음** 버튼을 눌렀을 경우 이전 페이지네이션 순서의 가장 처음에 위치한 페이지 번호로 이동합니다.

#### URL 리다이렉션(URL redirection)

- URL에서 음수나 한글 입력 시 1 페이지로 자동 리다이렉션 합니다.
- 존재하지 않는 숫자 입력 시 마지막 페이지로 자동 리다이렉션 합니다.

### 유의사항

- 단일 페이지일 경우에는 노출되지 않습니다.


## 테이블(Table)

테이블은 정보를 열과 행으로 구분하여 사용자가 쉽게 읽고 이해할 수 있도록 돕습니다.

### 구성

#### 타이틀 영역

- 테이블 내용에 표시할 주요 정보를 명확하고 간결한 레이블로 설명합니다.

#### 정보 영역

- 타이틀 영역에 대한 상세 정보가 표시됩니다.
- 하나의 행에서 정보를 모두 표시하기 어려운 경우, 해당 정보의 상세페이지를 가질 수 있습니다.
  - 상세페이지를 가지고 있는 정보일 경우 사용자가 인지할 수 있도록 반드시 hover 피드백을 제공합니다. 
- 각 정보에 대한 상태는 명확하게 구분되어야 합니다.


## 북 컴포넌트(Book Component)

다양한 기기 및 사용 목적에 맞게 구조화한 도서 정보를 고객에게 일관성 있게 제공하기 위해 만든 컴포넌트입니다.

### 섬네일(Thumbnail)

#### 크기 

- 사용 목적에 따라 분류한 섬네일 크기 가이드라인의 사용을 권장합니다. 하지만 서비스 및 기기의 특성, 주변 디자인 요소에 따라 가이드라인을 적용하기 어려운 경우는 예외를 허용합니다.
- 세로가 긴 형태의 표지일 경우를 대비하여 섬네일의 최대 높이(height)를 아래와 같이 제한합니다.
  - `max-height: width * 1.618 - 10px`

| 크기(px) | 사용                                                         |
| -------- | ------------------------------------------------------------ |
| 40-50    | 작은 영역에서 사용                                           |
| 60-70    | 표시되는 메타데이터가 많거나 액션 버튼이 함께 노출되는 리스트 영역에서 사용 |
| 80-120   | 표지를 강조해야 하는 주요 리스트 영역에서 사용               |
| 150, 200 | 표지를 단독으로 강조해야 하는 경우 사용                      |

#### 스타일

- 가급적이면 linear gradient와 border 효과를 공통으로 적용합니다. 하지만 서비스 및 기기의 특성, 주변 디자인 요소에 따라 해당 효과를 제외하거나 다른 효과를 추가할 수 있습니다.
  - PAPER 서점에서는 그래픽 요소를 최소화하기 위해 border 효과만 적용합니다.
  - 리디셀렉트 상세페이지의 섬네일은 배경색과 구분을 위해 shadow 효과를 적용합니다.

#### 뱃지

- 위치가 겹치지 않는 2개 이상의 뱃지를 함께 사용할 수 있습니다.

| 구분      | 사용                                             |
| --------- | ------------------------------------------------ |
| **Price** | 대여, 할인, 40권/화 미만 무료, 40권/화 이상 무료 |
| **Adult** | 성인 도서                                        |
| **Set**   | 세트 도서                                        |
| **HD**    | 고화질 도서                                      |

### 메타데이터(Metadata)

사용 목적과 도서 장르에 따라 표시되는 정보는 다를 수 있지만 기본적으로 도서 제목과 저자는 꼭 표시되어야 합니다.

| 구분                | 사용                |
| ------------------- | ------------------- |
| **Title**           | 도서 제목           |
| **Subtitle**        | 부제목              |
| **Authors**         | 저자                |
| **Translator**      | 역자                |
| **Count**           | 총 권수, 완결 여부  |
| **Publisher**       | 출판사              |
| **Category**        | 카테고리            |
| **Star rate**       | 별점 및 참여 인원수 |
| **Description**     | 책 소개             |
| **Rental price**    | 대여 가격           |
| **Buy price**       | 구매 가격           |
| **Book type badge** | 만화/소설 뱃지      |
| **Some deal badge** | 썸딜 뱃지           |

### 레이아웃 타입(Layout Type)

주요 레이아웃 및 도서 정보의 노출 순서는 다음과 같습니다. 

#### 세로형(portrait)

- 한눈에 많은 도서를 탐색해야 하는 경우에 사용합니다.
  - ex. 홈 > 섹션 별 도서 리스트, 이벤트 페이지 내 도서 리스트
- 섬네일의 높이가 균일하지 않으므로 도서 제목 상단에 일정 간격을 두고 배치합니다.

#### 가로형(landscape)

- 표시할 정보의 양이 많거나 임의의 액션 버튼이 함께 노출되어야 하는 경우에 사용합니다.
  - ex. 도서 검색 결과 리스트, 연재 선호작품 리스트
- 섬네일은 리스트 영역 상단에 배치합니다.
