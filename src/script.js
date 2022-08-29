document.addEventListener("DOMContentLoaded",()=>{
  const sliderAnimaTime = 3000; // setTimeoutの遷移時間
  const sliderParent = document.querySelector('.wrapper ul'); // スライダー要素
  // 各スライドへ付与するリンク
  const ankers = ['https://www.yahoo.co.jp/','https://www.bing.com/?cc=jp','https://www.ocn.ne.jp/','https://www.baidu.com/','https://www.google.com/'];
  // 各スライドへ付与するalt（及びplaceholderにセットするテキスト）
  const imgAltTxt = ['Lorem','ipsum','dolor','sit','amet'];
  
  // 加工処理
  const imgItems = imgAltTxt.map(imgItem => {
    return `https://via.placeholder.com/640x360/333/fff?text=${imgItem}`;
  });
  
  // スライダー要素の下準備とカルーセルの生成
  sliderParent.insertAdjacentHTML('beforeend','<li><a target="_blank"><img></a></li><li id="btnWrap"></li>');
  imgAltTxt.forEach(imgCursur => {
    sliderParent.querySelector('#btnWrap').insertAdjacentHTML('beforeend','<button class="btns"></button>');
  });
  
  // 枚数表示用のpタグを準備
  sliderParent.querySelector('li').insertAdjacentHTML('afterbegin',`<p></p>`);
  
  // スライダーの中身を生成・加工
  function CreatSliderElements(targetAnker, targetImg, val){
    targetAnker.setAttribute('href', ankers[val]);
    targetImg.setAttribute('src', imgItems[val]);
    targetImg.setAttribute('alt', imgAltTxt[val]);
  }
  
  let counts = 0; // カウンター（counts）の準備
  function SlideCounter(){ // スライダーの表示に関する処理
    sliderParent.querySelector('p').textContent = `${counts+1}/${imgItems.length}`;
    CreatSliderElements(sliderParent.querySelector('li a'), sliderParent.querySelector('li a img'), counts);
    counts++; // インクリメント
    if(counts === imgItems.length){ // 枚数分に達したらカウントをリセット
       counts = 0;
    }
    
    // ボタンクリックで、そのインデックス番号をカウンター（counts）へセットしてスライド調整
    sliderParent.querySelectorAll('.btns').forEach((btn, i) => {
       btn.addEventListener('click',()=>{
           counts = i;
           sliderParent.querySelector('p').textContent = `${counts+1}/${imgItems.length}`;
           CreatSliderElements(sliderParent.querySelector('li a'), sliderParent.querySelector('li a img'), counts);
       });
    });
    
    countLoop(); // setTimeoutでループ処理させる
  }
  
  // ループ処理
  function countLoop(){
    setTimeout(()=>{
       SlideCounter();
    }, sliderAnimaTime);
  }
  
  // 初回実行（起動用：スライダーの表示に関する処理）
  SlideCounter();
  
});