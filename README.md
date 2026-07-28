# NestJS Basic Study

## 목표
- Module, Controller, Provider의 역할을 설명할 수 있다.
- 간단한 REST API를 구현할 수 있다.
- DTO와 ValidationPipe로 요청을 검증할 수 있다.
- Service를 단위 테스트할 수 있다.

## 실행 방법
npm install
npm run start:dev
npm test
npm run test:e2e

## API
| Method | URL | 설명 |
|---|---|---|
| GET | /todos | 목록 조회 |
| GET | /todos/:id | 단건 조회 |
| POST | /todos | 생성 |
| PATCH | /todos/:id | 수정 |
| DELETE | /todos/:id | 삭제 |