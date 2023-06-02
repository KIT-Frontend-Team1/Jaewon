# MSW ( Mock Service Worker) // npm i msw

### msw는 백엔드와에 소통을 하지 않아도 가상으로 백엔드와 소통하는거 같은 일을 할 수 있다.

### 실제 서버에서 작동하는 것처럼 실행되어 실제 서버에 의존하지 않고도 다양한 상황을 테스트 할 수 있다.

### 라우팅 및 경로 설정을 통해 특정 엔드 포인트에 대한 요청을 가로챌 수 있다.

### 이로인해 특정 엔드포인트에 대한 요청을 제공하고 나머지는 실제 서버로 전달 할 수도 있다.

### 위 내용은 Post 요청에 대해 성공 또는 실패를 시뮬레이션 할 수 있는것 처럼 개발자가 실제 API 서버에 의존하지 않고도 효율적인 테스트와 개발 환경을 구축 할 수 있게 해준다.

---

# rest

### rest는 가짜 응답을 하는데 사용되는 객체다.

### rest.get(), rest.post(), rest.put(), rest.patch(), rest.delete(),rest.options()등을 이용해서 모의 응답을 할 수 있다.

## rest 예시:

          import { rest } from 'msw';

          const handlers = [
            rest.get('/api/users', (req, res, ctx) => {
              return res(ctx.status(200), ctx.json({ name: 'John Doe' }));
            }),
            rest.post('/api/users', (req, res, ctx) => {
              return res(ctx.status(201));
            }),
          ];

# req
### req는 요청 객체를 나타내는 변수다. req객체를 사용하여요청의 헤더,바디,경로 등의 정보에 접근이 가능하다.

##### 요약:요청에 관한 정보

      ex)
        const userId = req.params.id; // 경로 매개변수에 접근
        const token = req.headers.get('Authorization'); // 헤더 값에 접근

        return res(ctx.status(200), ctx.json({ id: userId, token }));

              return res(ctx.status(200), ctx.json({ id: userId, token }));

# res
### res는 응답 객체를 나태내는 변수다. res객체를 사용하여 응답의 상태코드, 헤더 ,바디 등의 정보를 설정 할 수 있다.

##### 요약:가짜 응답을 만들어 내기 위한 함수형 기능

      ex)
        rest.get('/api/users', (req, res, ctx) => {
          return res(
            ctx.status(200), // 상태 코드 설정
            ctx.set('Content-Type', 'application/json'), // 헤더 설정
            ctx.json({ name: 'John Doe' }) // JSON 형태의 응답 바디 설정
          );
        }),

        return res(ctx.status(200), ctx.json({ id: userId, token }));

# ctx

 ### ctx는 context 객체를 나타내는 변수다. ctx객체는 res객체와 함께 사용되며,응답의 상태 코드,헤더,바디 등을 설정하는데 사용된다. 
 ### 또한 ctx 객체를 사용하여 특정 응답 시나리오를 조작할 수도 있다.

##### 요약:ctx, 가짜 응답의 status code, headers, body 또는 그 외의 정보를 설정하는 것을 돕는 함수의 집합

      ex)
        rest.get('/api/users', (req, res, ctx) => {
          const isAdmin = req.headers.get('Authorization') === 'Bearer ADMIN_TOKEN';

          if (isAdmin) {
            return res(ctx.status(200), ctx.json({ role: 'admin' }));
          } else {
            return res(ctx.status(403), ctx.json({ message: 'Forbidden' }));
          }
        }),
        
---
 # ctx.delay(value)

 ### ctx.delay()는 응답을 지연시키는 기능을 제공 value에 ms 지정
     
    ex)
         rest.get('/api/users', (req, res, ctx) => {
          return res(ctx.delay(1000), ctx.json({ name: 'John Doe' }))
         })

# ctx.status(code)

###ctxstatus()는 응답의 상태 코드를 설정하는 기능을 제공 code에 HTTP 상태코드 지정
#### ex) 1xx, 200, 201, 3xx, 4xx

# ctx.set(header,value)

### ctx.set()은 응답의 헤더를 설정하는 기능을 제공한다.  헤더이름과 헤더값이 포함된 객체를 넣음
