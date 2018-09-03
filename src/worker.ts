// worker code...
import { proxyValue, expose, unexpose } from 'comlinkjs/dist/comlink'

let dummy = 0;

class ReturnedObject {
	work()
	{
		++dummy;
	}
}

class App {
	private returnObj: any;
	getObject()
	{
		this.returnObj = new ReturnedObject();
		return proxyValue(this.returnObj);
	}

	release() {
		unexpose(this.returnObj);
		unexpose(this);
	}
}

expose({App, ReturnedObject}, self);
