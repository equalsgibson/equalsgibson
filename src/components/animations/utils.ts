export async function delay(ms = 0) {
    await sleep(ms);
}


export const sleep = (ms = 0) => new Promise(resolve => setTimeout(resolve, ms));
