import { proxy, unexpose } from 'comlinkjs/dist/comlink';
import Worker from 'worker-loader?inline=false&name=[name]-[hash].js!./worker';

var worker = new Worker();
const { App } = proxy(worker) as any;

async function test()
{
    const app = await new App();
    const returned = await app.getObject();
    await returned.work();
    // clean up, don't await it will never come back as message channel will get closed.
    app.release();
}

let shouldStop = false;
document.addEventListener('DOMContentLoaded', () => {
    const el = document.getElementById('stop');
    el.addEventListener('click', () => {
        shouldStop = true;
    })
});

function stress()
{
    console.log('run stress...')
    const promises = [];
    for (let i = 0; i < 1000; ++i)
        promises.push(test());
    
    Promise.all(promises)
        .then(() => {
            if (shouldStop) {
                console.log('stopping stress test.')
                return;
            }
            setTimeout(stress, 20); 
        }).catch((err) => {
            console.log('err=', err)
        });
}

stress();