document.addEventListener('DOMContentLoaded', () => {
    const trigger = document.getElementById('js-menu-trigger');
    const body = document.body;

    // ハンバーガーメニューのクリックイベント
    trigger.addEventListener('click', () => {
        // bodyにクラスをつけ外ししてCSSで制御
        body.classList.toggle('menu-open');
    });

    const pageTopBtn = document.getElementById('js-pagetop');

    // スクロールイベントを監視
    window.addEventListener('scroll', () => {
        // 300px以上スクロールしたらボタンを表示、それ以外は非表示
        if (window.scrollY > 300) {
            pageTopBtn.classList.add('is-show');
        } else {
            pageTopBtn.classList.remove('is-show');
        }
    });

    // ボタンクリック時の挙動
    pageTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth' // スムーズにスクロール
        });
    });

    // メニューリンクをクリックしたら閉じる（ページ内リンク対策）
    const navLinks = document.querySelectorAll('#js-mobile-nav a');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            body.classList.remove('menu-open');
        });
    });


    const contactForm = document.getElementById('js-form');
    const successMsg = document.getElementById('js-success-msg');

    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            // 実際の送信処理を防ぐ（サーバー側処理がないため）
            e.preventDefault();

            // 送信ボタンを無効化（二重送信防止）
            const submitBtn = contactForm.querySelector('.submit-btn');
            submitBtn.disabled = true;
            submitBtn.textContent = '送信中...';

            // 本来はここで fetch や ajax を使いサーバーへデータを送りますが、
            // 今回はフロントのみなので、1.5秒後に完了メッセージを出す演出をします
            setTimeout(() => {
                contactForm.style.display = 'none'; // フォームを隠す
                successMsg.style.display = 'block'; // 完了メッセージを出す
            }, 1500);
        });
    }
});