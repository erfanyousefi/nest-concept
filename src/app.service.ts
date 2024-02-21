import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
  blocking() {
    const startTime = Date.now();
    while(Date.now() - startTime < 10000) {}
    return "Done";
  }
  nonBlocking() {
    return new Promise(async(resolve) => {
      setTimeout(() => {
        resolve("Done");
      }, 10000)
    })
  }
  async promises() {
    const promises = [];
    for (let index = 0; index < 10; index++) {
      promises.push(await this.sleep(index));
    }
    return promises;
  }
  async promisesParallel() {
    const promises = [];
    for (let index = 0; index < 10; index++) {  
      promises.push(this.sleep(index))
    }
    return Promise.all(promises)
  }
  sleep(value) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(value)
      }, 1000)
    })
  }

}
