let log = ['test']; 

const obj = {
        get latest(){
            if(log.length == 0 ) return undefined; 
            return log[log.length-1]; 
        }

}
//get 사용시 유의사항 
//파라메터가 없어야 한다. 
//리터럴 객체의 같은 이름의 get이나 동일한 이름의 프로퍼티를 가질 수 없다. 

console.log(obj.latest); 

/*
getter의 장점
계산 미루기 (Lazy getter)
getter는 프로퍼티에 접근하기 전까지 그 값을 계산하지 않습니다.
getter의 값 계산은 실제 값이 필요할 때 이루어지고, 값이 필요하지 않다면, 계산을 하지 않습니다. 즉 값이 필요하지 않다면 쓸데없는 계산을 하지 않아 cpu를 낭비하지 않게 됩니다.

캐싱 (Smart/Memorized getter)
최적화 방법으로 계산 미루기와 함께 캐싱하는 것이 있습니다.
값은 getter가 호출될 때 처음 계산되며 캐싱됩니다. 이후의 호출은 다시 계산하지 않고 이 캐시값을 반환합니다.
이러한 캐싱은 다음과 같은 경우에 유용합니다.

1. 값의 계산 비용이 큰 경우. (RAM이나 CPU 시간을 많이 소모하거나, worker thread를 생성하거나, 원격 파일을 불러오는 등)
2. 값이 당장 필요하지 않지만 나중에 사용되어야 할 경우(혹은 이용되지 않을 수도 있는 경우)
3. 값이 여러번 이용되지만 변경되지 않아 매번 계산할 필요가 없는 경우

출처: https://beomy.tistory.com/14 [beomy]
*/