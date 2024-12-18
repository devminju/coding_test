// 문제: 베스트 앨범
// 스트리밍 사이트에서 장르 별로 가장 많이 재생된 노래를 두 개씩 모아 베스트 앨범을 출시하려 합니다. 노래는 고유 번호로 구분하며, 노래를 수록하는 기준은 다음과 같습니다.
/* 1. 속한 노래가 많이 재생된 장르를 먼저 수록합니다.
   2. 장르 내에서 많이 재생된 노래를 먼저 수록합니다.
   3. 장르 내에서 재생 횟수가 같은 노래 중에서는 고유 번호가 낮은 노래를 먼저 수록합니다. */
// 노래의 장르를 나타내는 문자열 배열 genres와 노래별 재생 횟수를 나타내는 정수 배열 plays가 주어질 때, 베스트 앨범에 들어갈 노래의 고유 번호를 순서대로 return 하도록 solution 함수를 완성하세요.

// 풀이 ============================================
// 1. 장르를 key로 Map 을 구현하고, value로 {plays, index} 형태의 Map을 생성한다.
// 2. 장르 별로 plays를 합하여 순서를 정한다.
// 3. 장르 내 plays의 크기를 비교하고, 1,2위만 남긴다.

function solution(genres, plays) {
  const genre_map = new Map();
  // 1. 장르: {고유번호: 재생횟수} Map 구현
  for (let i = 0; i < genres.length; i++) {
    if (!genre_map.has(genres[i])) {
      genre_map.set(genres[i], new Map().set(i, plays[i]));
    } else {
      genre_map.get(genres[i]).set(i, plays[i]);
    }
  }

  // 2. 많이 재생된 장르 순서
  const genre_count = {};
  for (const genre of genre_map) {
    let count = 0;
    for (const plays of genre[1]) {
      count += plays[1];
    }
    genre_count[genre[0]] = count;
  }
  const sorted_genre = Object.entries(genre_count).sort((a, b) => b[1] - a[1]);

  // 3. 장르 내에서 재생횟수 비교 후 제거
  const album_arr = [];
  for (const item of sorted_genre) {
    const genre = item[0];
    const sorted_play = [...genre_map.get(genre).entries()].sort(
      (a, b) => b[1] - a[1]
    );

    sorted_play[0] && album_arr.push(sorted_play[0][0]);
    sorted_play[1] && album_arr.push(sorted_play[1][0]);
  }

  return album_arr;
}
console.log(
  solution(
    ["classic", "pop", "classic", "classic", "pop"],
    [500, 600, 150, 800, 2500]
  )
);

// 답안 ============================================
// 장르 100개: 시간복잡도 높아도 패스 될 수 있음
// 1. 같은 장르끼리 묶는다
// 2. 묶인 노래들을 재생순으로 정렬한다
// 3. 노개를 두개까지 자른다

// 핵심 키워드: "묶는 것", "정렬"

function answer(genres, plays) {
  const genreMap = new Map();

  genres
    .map((genre, index) => [genre, plays[index]]) // 장르 값과, 인덱스 묶음
    .forEach(([genre, play], index) => {
      const data = genreMap.get(genre) || { total: 0, songs: [] };
      genreMap.set(genre, {
        total: data.total + play,
        songs: [...data.songs, { play, index }]
          .sort((a, b) => b.play - a.play)
          .slice(0, 2),
      });
    });

  return [...genreMap.entries()]
    .sort((a, b) => b[1].total - a[1].total) // 정렬 맞춤
    .flatMap((item) => item[1].songs) // 배열 생성 (배열 내에 배열 생기는 것 방지 위해 flatMap 사용)
    .map((song) => song.index);
}
console.log(
  answer(
    ["classic", "pop", "classic", "classic", "pop"],
    [500, 600, 150, 800, 2500]
  )
);

// 후기 ============================================
// - hashMap 만들때 total 값, sorted 등 데이터 정렬해서 넣는것이 좋다
// - Object.entries()
// - sort: b-a, a-b
// - Map.entries() 배열로 만드는 방법: [...Map.entries()]
// - flatMap 사용
// "묶는다" => 해시 테이블 사용 한다 (거의)

// 두번쨰 풀이
function solution1(genres, plays) {
  const playHashMap = new Map();
  const itemHashMap = new Map();
  var answer = [];
  for (let i = 0; i < genres.length; i++) {
    const newKey = genres[i];
    if (playHashMap.has(newKey)) {
      // 이미 값이 존재하는 경우
      // 1. time을 새로 계산해서 넣는다
      const prevTime = playHashMap.get(newKey);
      playHashMap.set(newKey, prevTime + plays[i]);
      // 2. item에 push 한다
      let newItems = itemHashMap.get(newKey);
      newItems.push([i, plays[i]]);
      itemHashMap.set(newKey, newItems);
    } else {
      // 처음 값을 추가하는 경우
      // 1. time 값 추가
      playHashMap.set(newKey, plays[i]);
      // 2. item 값 추가
      itemHashMap.set(newKey, [[i, plays[i]]]);
    }
  }
  // console.log("playHashMap", playHashMap);
  // play 시간이 가장 많은 순으로 장르 정렬
  const prioGenres = [...playHashMap.entries()]
    .sort((a, b) => b[1] - a[1])
    .map((i) => i[0]);
  // console.log("prioGenres", prioGenres);
  for (const genre of prioGenres) {
    // play 시간이 가장 많은 순으로 고유번호 정렬
    const items = itemHashMap
      .get(genre)
      .sort((a, b) => b[1] - a[1])
      .map((i) => i[0]);
    // 고유번호 목록 개수가 1개 라면
    if (items.length === 1) {
      answer.push(items[0]);
    } else {
      // 1개 보다 많다면 (1개보다 작은 경우는 없음)
      answer.push(items[0]);
      answer.push(items[1]);
    }
  }

  return answer;
}
console.log(
  solution1(
    ["classic", "pop", "classic", "classic", "pop"],
    [500, 600, 150, 800, 2500]
  )
);
