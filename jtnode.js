
////////// Main //////////////////////////////////////////////////

console.log('jtnode start');

const exJob = async () => {

	console.log('jtnode key = 1010');
	
	setTimeout( exJob, 5000);
};

exJob();
