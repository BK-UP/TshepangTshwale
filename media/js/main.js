function OpenResume(){
      if(window.screen.width<993){
            window.open("./media/alt/Mr_Tshwale-Resume.pdf");
            return;
      }
      let book = document.querySelector('.book');
      let bookPage_1 = document.querySelector('.page-1');
      let bookPage_1Back = bookPage_1.querySelector('.back');
      book.classList.add('bookTrans');
      bookPage_1.classList.add('pageTrans');
      bookPage_1Back.classList.add('backTrans');
}
function closeBook(){
      let book = document.querySelector('.book');
      let bookPage_1 = document.querySelector('.page-1');
      let bookPage_1Back = bookPage_1.querySelector('.back');
      book.classList.remove('bookTrans');
      bookPage_1.classList.remove('pageTrans');
      bookPage_1Back.classList.remove('backTrans');
}