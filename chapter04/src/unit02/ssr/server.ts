import { createServer, IncomingMessage, ServerResponse } from 'http';
import { createReadStream, readFileSync } from 'fs';

import { renderToNodeStream, renderToString } from 'react-dom/server';
import { createElement } from 'react';
import * as path from 'path';

// js, ts는 html 파일을 직접 인식하지 못한다.
const html = readFileSync(
	path.join(__dirname, '../../../public/index.html'),
	'utf-8'
);
const indexFront = readFileSync(
	path.join(__dirname, '../../../public/index-front.html'),
	'utf-8'
);
const indexEnd = readFileSync(
	path.join(__dirname, '../../../public/index-end.html'),
	'utf-8'
);

import App from './component/App';
import { fetchTodo } from './fetch/fetch';

const PORT = process.env.PORT || 3000;

async function serverHandler(req: IncomingMessage, res: ServerResponse) {
	const { url } = req;

	switch (url) {
		// renderToString을 사용한 서버 사이드 렌더링
		case '/': {
			const result = await fetchTodo();

			const rootElement = createElement(
				'div',
				{ id: 'root' },
				createElement(App, { todos: result })
			);
			const renderResult = renderToString(rootElement);

			const htmlResult = html.replace('__placeholder__', renderResult);

			res.setHeader('Content-Type', 'text/html');
			res.write(htmlResult);
			res.end();
			return;
		}

		// renderToNodeStream을 사용한 서버 사이드 렌더링
		case '/stream': {
			// index.html의 앞선 절반을 우선 응답으로 기록하고,
			// 이후 나머지 부분을 스트림 형태로 생성
			// 스트림이 종료되면 html.html 나머지 반쪽을 붙이고 최종 결과물을 브라우저에 제공
			res.setHeader('Content-Type', 'text/html');
			res.write(indexFront);

			const result = await fetchTodo();
			const rootElement = createElement(
				'div',
				{ id: 'root' },
				createElement(App, { todos: result })
			);

			const stream = renderToNodeStream(rootElement);
			stream.pipe(res, { end: false });
			stream.on('end', () => {
				res.write(indexEnd);
				res.end();
			});
			return;
		}

		// 브라우저에 제공되는 리액트 코드
		case '/browser.js': {
			res.setHeader('Content-Type', 'application/javascript');
			createReadStream(`./dist/browser.js`).pipe(res);
			return;
		}

		// 위 파일의 소스맵
		case '/browser.js.map': {
			res.setHeader('Content-Type', 'application/javascript');
			createReadStream(`./dist/browser.js.map`).pipe(res);
			return;
		}

		default: {
			res.statusCode = 404;
			res.end('404 Not Found');
		}
	}
}

function main() {
	// createServer: http 모듈을 이용해 간단한 서버를 만들 수 있는 Node.js 기본 라이브러리
	// serverHandler: http 서버가 라우트별로 어떻게 작동할지를 정의하는 함수
	createServer(serverHandler).listen(PORT, () => {
		console.log(`Server has been started ${PORT}...`); // eslint-disable-line no-console
	});
}

main();
