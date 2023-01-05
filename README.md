# NodeJS-TDD
인프런 「테스트주도개발(TDD)로 만드는 NodeJS API 서버」 강의 실습 소스코드

# ORM 
- 데이터베이스를 객체로 추상화해 논것을 ORM(Object Relational Mapping)
- 쿼리를 직접 작성하는 대신 ORM의 메소드로 데이터를 관리할 수 있음
- 노드에서 SQL ORM은 시퀄라이져(Sequelize)가 있음

# Sequelize
- 모델: DB TABLE을 ORM으로 추상화한것(ex. User)
    - sequelize.define(): 모델 정의
    - sequelize.sync(): DB 연동
- Sequelize CRUD 예시
    - insert: User.create({name: 'aa'})
    - select: User.findAll()
    - update: User.update({name: 'zz'}, {where: {id: 1}})
    - delete: dstroy({where: {id: 1}})
