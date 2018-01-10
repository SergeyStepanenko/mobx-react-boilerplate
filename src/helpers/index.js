export const requestData = ({ url }) => {
	return new Promise((resolve, reject) => {
		const xhr = new XMLHttpRequest();
		xhr.open('GET', url, true);
		xhr.onload = function x() {
			if (this.status === 200) {
				let response = {};

				try {
					response = JSON.parse(this.response);
				} catch (e) {
					console.error('JSON.parse error', e); // eslint-disable-line
				} finally {
					resolve(response.issue);
				}
			} else {
				const error = new Error(this.statusText);
				error.code = this.status;
				reject(error);
			}
		};

		xhr.send();
		xhr.onerror = () => reject(new Error('oops'));
	});
};

export const Promise_all = (promises) => {
	return new Promise((resolve) => {
		const results = [];
		let count = 0;
		promises.forEach((promise, idx) => {
			promise
				.catch(err => err)
				.then(valueOrError => {
					results[idx] = valueOrError;
					count += 1;
					if (count === promises.length) resolve(results);
				});
		});
	});
};
