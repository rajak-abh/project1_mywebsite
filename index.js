    const mobileBtn = document.getElementById('mobile');
    const navbar    = document.getElementById('navbar');
    const overlay   = document.getElementById('overlay');

    function openMenu() {
        navbar.classList.add('active');
        mobileBtn.classList.add('active');
        overlay.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    function closeMenu() {
        navbar.classList.remove('active');
        mobileBtn.classList.remove('active');
        overlay.classList.remove('active');
        document.body.style.overflow = '';
    }

    mobileBtn.addEventListener('click', () => {
        navbar.classList.contains('active') ? closeMenu() : openMenu();
    });

    overlay.addEventListener('click', closeMenu);

    navbar.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', closeMenu);
    });