// Utility untuk generate HTML/CSS standalone dari komponen
// Mapping komponen ke HTML/CSS standalone

export const standaloneComponents = {
  'ButtonBasic.jsx': {
    html: `<button class="btn--basic">
  <i class="fas fa-check"></i>
  <span>Submit</span>
</button>`,
    css: `.btn--basic {
  font-family: "Poppins", sans-serif;
  border: none;
  cursor: pointer;
  font-weight: 600;
  transition: all 0.3s ease;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  background: linear-gradient(135deg, #e57373 0%, rgba(229, 115, 115, 0.95) 100%);
  color: #ffffff;
  padding: 16px 32px;
  border-radius: 12px;
  font-size: 15px;
  box-shadow: 0 4px 15px rgba(229, 115, 115, 0.25),
              0 2px 6px rgba(229, 115, 115, 0.15);
  backdrop-filter: blur(10px);
  min-width: 180px;
  min-height: 50px;
  white-space: nowrap;
}

.btn--basic i {
  font-size: 15px;
}

.btn--basic:hover {
  background: linear-gradient(135deg, #c2185b 0%, #e57373 100%);
  transform: translateY(-3px);
  box-shadow: 0 8px 25px rgba(229, 115, 115, 0.35),
              0 4px 10px rgba(229, 115, 115, 0.2);
}

.btn--basic:active {
  transform: translateY(-1px);
  box-shadow: 0 4px 15px rgba(229, 115, 115, 0.25);
}

@media (max-width: 768px) {
  .btn--basic {
    padding: 16px 24px;
    font-size: 15px;
    min-height: 50px;
    min-width: 160px;
    width: 100%;
    max-width: 100%;
    justify-content: center;
  }
}

@media (max-width: 480px) {
  .btn--basic {
    padding: 16px 20px;
    font-size: 15px;
    min-height: 50px;
    min-width: 140px;
    border-radius: 12px;
  }
}`,
    dependencies: {
      fonts: ['https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap'],
      icons: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css'
    }
  },
  'ButtonIcon.jsx': {
    html: `<button class="btn--icon">
  <i class="fas fa-search"></i>
  <span class="btn--icon__text">Search</span>
</button>`,
    css: `.btn--icon {
  font-family: "Poppins", sans-serif;
  border: none;
  cursor: pointer;
  font-weight: 600;
  transition: all 0.3s ease;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  background: linear-gradient(135deg, #f48fb1 0%, rgba(244, 143, 177, 0.95) 100%);
  color: #ffffff;
  border-radius: 12px;
  padding: 16px 32px;
  font-size: 15px;
  box-shadow: 0 4px 15px rgba(244, 143, 177, 0.25),
              0 2px 6px rgba(244, 143, 177, 0.15);
  backdrop-filter: blur(10px);
  min-width: 180px;
  min-height: 50px;
  white-space: nowrap;
}

.btn--icon i {
  font-size: 16px;
}

.btn--icon__text {
  font-size: 15px;
}

.btn--icon:hover {
  background: linear-gradient(135deg, #d87093 0%, #f48fb1 100%);
  transform: translateY(-3px);
  box-shadow: 0 8px 25px rgba(244, 143, 177, 0.35),
              0 4px 10px rgba(244, 143, 177, 0.2);
}

.btn--icon:active {
  transform: translateY(-1px);
  box-shadow: 0 4px 15px rgba(244, 143, 177, 0.25);
}

@media (max-width: 768px) {
  .btn--icon {
    padding: 16px 24px;
    font-size: 15px;
    min-height: 50px;
    min-width: 160px;
    width: 100%;
    max-width: 100%;
    justify-content: center;
    gap: 10px;
  }
}

@media (max-width: 480px) {
  .btn--icon {
    padding: 16px 20px;
    font-size: 15px;
    min-height: 50px;
    min-width: 140px;
    border-radius: 12px;
    gap: 10px;
  }
}`,
    dependencies: {
      fonts: ['https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap'],
      icons: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css'
    }
  },
  'ButtonGradient.jsx': {
    html: `<button class="btn--gradient">
  <span>Explore</span>
  <i class="fas fa-arrow-right"></i>
</button>`,
    css: `.btn--gradient {
  font-family: "Poppins", sans-serif;
  border: none;
  cursor: pointer;
  font-weight: 600;
  transition: all 0.3s ease;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  background: linear-gradient(135deg, #e57373 0%, #f48fb1 50%, rgba(244, 143, 177, 0.95) 100%);
  color: #ffffff;
  padding: 16px 32px;
  border-radius: 30px;
  letter-spacing: 0.5px;
  font-size: 15px;
  box-shadow: 0 6px 20px rgba(229, 115, 115, 0.3),
              0 3px 8px rgba(244, 143, 177, 0.2);
  backdrop-filter: blur(10px);
  position: relative;
  overflow: hidden;
  min-width: 180px;
  min-height: 50px;
  white-space: nowrap;
}

.btn--gradient::before {
  content: "";
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
  transition: left 0.5s ease;
}

.btn--gradient i {
  font-size: 15px;
  transition: transform 0.3s ease;
}

.btn--gradient:hover {
  background: linear-gradient(135deg, #c2185b 0%, #e57373 50%, #f48fb1 100%);
  box-shadow: 0 10px 30px rgba(229, 115, 115, 0.4),
              0 5px 12px rgba(244, 143, 177, 0.25);
  transform: translateY(-3px);
}

.btn--gradient:hover::before {
  left: 100%;
}

.btn--gradient:hover i {
  transform: translateX(4px);
}

.btn--gradient:active {
  transform: translateY(-1px);
  box-shadow: 0 6px 20px rgba(229, 115, 115, 0.3);
}

@media (max-width: 768px) {
  .btn--gradient {
    padding: 16px 24px;
    font-size: 15px;
    min-height: 50px;
    min-width: 160px;
    width: 100%;
    max-width: 100%;
    justify-content: center;
    gap: 10px;
  }
}

@media (max-width: 480px) {
  .btn--gradient {
    padding: 16px 20px;
    font-size: 15px;
    min-height: 50px;
    min-width: 140px;
    border-radius: 30px;
    gap: 10px;
  }
}`,
    dependencies: {
      fonts: ['https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap'],
      icons: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css'
    }
  },
  'CardBadge.jsx': {
    html: `<div class="card card--badge">
  <div class="card__badge">
    <i class="fas fa-star"></i>
    <span>Featured</span>
  </div>
  <img src="https://i.pinimg.com/736x/f4/2f/ff/f42ffff6cd3d7fa6ad0dbd430b16bb3e.jpg" alt="Card Badge" class="card__image">
  <div class="card__content">
    <h3 class="card__title">Card with Badge</h3>
    <p class="card__desc">
      Card dengan badge featured yang menarik di bagian atas untuk menonjolkan konten spesial.
    </p>
  </div>
</div>`,
    css: `.card {
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  width: 100%;
  max-width: 320px;
  min-width: 280px;
  display: flex;
  flex-direction: column;
  min-height: 400px;
}

.card__image {
  width: 100%;
  height: 180px;
  min-height: 180px;
  object-fit: cover;
  flex-shrink: 0;
}

.card__content {
  padding: 1.25rem;
  flex: 1;
  display: flex;
  flex-direction: column;
}

.card__title {
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 0.75rem;
  color: #2c1810;
  font-family: "Poppins", sans-serif;
  line-height: 1.3;
}

.card__desc {
  font-size: 0.9rem;
  color: #d87093;
  line-height: 1.5;
  font-family: "Poppins", sans-serif;
  flex: 1;
}

.card--badge {
  background: linear-gradient(135deg, #ffffff 0%, rgba(255, 250, 250, 0.98) 100%);
  border: none;
  border-radius: 20px;
  box-shadow: 0 8px 25px rgba(244, 143, 177, 0.15),
              0 3px 10px rgba(244, 143, 177, 0.1);
  backdrop-filter: blur(10px);
  position: relative;
  overflow: visible;
}

.card--badge .card__badge {
  position: absolute;
  top: 1rem;
  right: 1rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background: linear-gradient(135deg, #f48fb1 0%, rgba(244, 143, 177, 0.95) 100%);
  color: #ffffff;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-size: 0.85rem;
  font-weight: 600;
  z-index: 10;
  box-shadow: 0 4px 12px rgba(244, 143, 177, 0.3);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  transition: all 0.3s ease;
}

.card--badge .card__image {
  border-radius: 18px 18px 0 0;
}

.card--badge:hover {
  transform: translateY(-6px);
  box-shadow: 0 15px 35px rgba(244, 143, 177, 0.25),
              0 6px 15px rgba(244, 143, 177, 0.15);
}

.card--badge:hover .card__badge {
  transform: scale(1.05);
  box-shadow: 0 6px 18px rgba(244, 143, 177, 0.4);
}

@media (max-width: 768px) {
  .card {
    max-width: 100%;
    margin: 0 auto;
  }

  .card__image {
    height: 180px;
  }

  .card__content {
    padding: 1.25rem;
  }

  .card__title {
    font-size: 1.2rem;
    margin-bottom: 0.75rem;
    line-height: 1.4;
  }

  .card__desc {
    font-size: 0.9rem;
    line-height: 1.6;
  }
}

@media (max-width: 480px) {
  .card {
    width: 100%;
  }

  .card__image {
    height: 160px;
  }

  .card__content {
    padding: 1rem;
  }

  .card__title {
    font-size: 1.1rem;
    margin-bottom: 0.5rem;
  }

  .card__desc {
    font-size: 0.85rem;
    line-height: 1.5;
  }
}`,
    dependencies: {
      fonts: ['https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap'],
      icons: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css'
    }
  },
  'CardAction.jsx': {
    html: `<div class="card card--action">
  <img src="https://i.pinimg.com/1200x/3b/6f/23/3b6f236d7322731a15e407c534ebd82a.jpg" alt="Card Action" class="card__image">
  <div class="card__content">
    <h3 class="card__title">Card with Action</h3>
    <p class="card__desc">
      Card dengan tombol action yang elegan untuk interaksi pengguna yang lebih baik.
    </p>
    <button class="card__actionBtn">
      Learn More
      <i class="fas fa-arrow-right"></i>
    </button>
  </div>
</div>`,
    css: `.card {
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  width: 100%;
  max-width: 320px;
  min-width: 280px;
  display: flex;
  flex-direction: column;
  min-height: 400px;
}

.card__image {
  width: 100%;
  height: 180px;
  min-height: 180px;
  object-fit: cover;
  flex-shrink: 0;
}

.card__content {
  padding: 1.25rem;
  flex: 1;
  display: flex;
  flex-direction: column;
}

.card__title {
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 0.75rem;
  color: #2c1810;
  font-family: "Poppins", sans-serif;
  line-height: 1.3;
}

.card__desc {
  font-size: 0.9rem;
  color: #d87093;
  line-height: 1.5;
  font-family: "Poppins", sans-serif;
  flex: 1;
}

.card--action {
  background: linear-gradient(135deg, #ffeef0 0%, rgba(255, 238, 240, 0.95) 100%);
  border: none;
  border-radius: 20px;
  box-shadow: 0 8px 25px rgba(244, 143, 177, 0.15),
              0 3px 10px rgba(244, 143, 177, 0.1);
  backdrop-filter: blur(10px);
}

.card--action .card__image {
  border-radius: 18px 18px 0 0;
}

.card--action .card__actionBtn {
  margin-top: auto;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background: linear-gradient(135deg, #e57373 0%, rgba(229, 115, 115, 0.95) 100%);
  color: #ffffff;
  border: none;
  padding: 0.75rem 1.5rem;
  border-radius: 12px;
  font-size: 0.9rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(229, 115, 115, 0.25),
              0 2px 6px rgba(229, 115, 115, 0.15);
  font-family: "Poppins", sans-serif;
  width: fit-content;
}

.card--action .card__actionBtn:hover {
  background: linear-gradient(135deg, #c2185b 0%, #e57373 100%);
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(229, 115, 115, 0.35),
              0 3px 10px rgba(229, 115, 115, 0.2);
}

.card--action .card__actionBtn:active {
  transform: translateY(0);
}

.card--action:hover {
  transform: translateY(-6px);
  box-shadow: 0 15px 35px rgba(244, 143, 177, 0.25),
              0 6px 15px rgba(244, 143, 177, 0.15);
}

@media (max-width: 768px) {
  .card {
    max-width: 100%;
    margin: 0 auto;
  }

  .card__image {
    height: 180px;
  }

  .card__content {
    padding: 1.25rem;
  }

  .card__title {
    font-size: 1.2rem;
    margin-bottom: 0.75rem;
    line-height: 1.4;
  }

  .card__desc {
    font-size: 0.9rem;
    line-height: 1.6;
  }
}

@media (max-width: 480px) {
  .card {
    width: 100%;
  }

  .card__image {
    height: 160px;
  }

  .card__content {
    padding: 1rem;
  }

  .card__title {
    font-size: 1.1rem;
    margin-bottom: 0.5rem;
  }

  .card__desc {
    font-size: 0.85rem;
    line-height: 1.5;
  }
}`,
    dependencies: {
      fonts: ['https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap'],
      icons: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css'
    }
  },
  'CardGradient.jsx': {
    html: `<div class="card card--gradient">
  <img src="https://i.pinimg.com/736x/2b/43/28/2b432840a61c8576e5a00b1b1cd40f56.jpg" alt="Card Gradient" class="card__image">
  <div class="card__overlay">
    <h3 class="card__title">Card with Gradient</h3>
    <p class="card__desc">
      Card dengan gradient overlay yang indah untuk memberikan efek visual yang menarik.
    </p>
  </div>
</div>`,
    css: `.card {
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  width: 100%;
  max-width: 320px;
  min-width: 280px;
  display: flex;
  flex-direction: column;
  min-height: 400px;
}

.card--gradient {
  background: transparent;
  border: none;
  border-radius: 20px;
  box-shadow: 0 10px 30px rgba(194, 24, 91, 0.15),
              0 4px 12px rgba(229, 115, 115, 0.1);
  position: relative;
  overflow: hidden;
  min-height: 400px;
}

.card--gradient .card__image {
  width: 100%;
  height: 100%;
  min-height: 400px;
  object-fit: cover;
  border-radius: 20px;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
}

.card--gradient .card__overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: linear-gradient(180deg, transparent 0%, rgba(194, 24, 91, 0.85) 50%, rgba(194, 24, 91, 0.95) 100%);
  padding: 1.25rem;
  padding-top: 2rem;
  color: #ffffff;
  border-radius: 0 0 20px 20px;
  z-index: 5;
  min-height: 220px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  transition: all 0.3s ease;
}

.card--gradient .card__title {
  color: #ffffff;
  margin-bottom: 0.75rem;
  text-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
  font-size: 1.25rem;
  font-weight: 600;
  line-height: 1.3;
  font-family: "Poppins", sans-serif;
}

.card--gradient .card__desc {
  color: rgba(255, 255, 255, 0.95);
  text-shadow: 0 1px 4px rgba(0, 0, 0, 0.2);
  font-size: 0.9rem;
  line-height: 1.5;
  font-family: "Poppins", sans-serif;
}

.card--gradient:hover {
  transform: translateY(-6px);
  box-shadow: 0 18px 40px rgba(194, 24, 91, 0.25),
              0 8px 18px rgba(229, 115, 115, 0.15);
}

.card--gradient:hover .card__overlay {
  background: linear-gradient(180deg, transparent 0%, rgba(194, 24, 91, 0.9) 50%, rgba(194, 24, 91, 0.98) 100%);
}

@media (max-width: 768px) {
  .card {
    max-width: 100%;
    margin: 0 auto;
  }

  .card--gradient .card__image {
    min-height: 400px;
  }

  .card--gradient .card__title {
    font-size: 1.2rem;
    margin-bottom: 0.75rem;
    line-height: 1.4;
  }

  .card--gradient .card__desc {
    font-size: 0.9rem;
    line-height: 1.6;
  }
}

@media (max-width: 480px) {
  .card {
    width: 100%;
  }

  .card--gradient .card__image {
    min-height: 400px;
  }

  .card--gradient .card__title {
    font-size: 1.1rem;
    margin-bottom: 0.5rem;
  }

  .card--gradient .card__desc {
    font-size: 0.85rem;
    line-height: 1.5;
  }
}`,
    dependencies: {
      fonts: ['https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap'],
      icons: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css'
    }
  },
  'HeaderSimple.jsx': {
    html: `<header class="header header--simple">
  <div class="header__content">
    <h1 class="header__title">Header Simple</h1>
    <div class="header__badge">
      <i class="fas fa-star"></i>
      <span>Welcome!</span>
    </div>
  </div>
</header>`,
    css: `.header {
  width: 100%;
  padding: 1.5rem 2.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-family: "Poppins", sans-serif;
  color: #ffffff;
  border-radius: 20px;
  position: relative;
  transition: all 0.3s ease;
  box-sizing: border-box;
}

.header__content {
  display: flex;
  align-items: center;
  gap: 1.5rem;
}

.header__title {
  font-size: 1.5rem;
  font-weight: 700;
  margin: 0;
  letter-spacing: -0.5px;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.15);
}

.header__badge {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1.25rem;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 20px;
  font-size: 0.85rem;
  font-weight: 500;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.25);
  transition: all 0.3s ease;
}

.header__badge:hover {
  background: rgba(255, 255, 255, 0.3);
  transform: translateY(-1px);
}

.header--simple {
  background: linear-gradient(135deg, #e57373 0%, #f48fb1 100%);
  box-shadow: 0 4px 15px rgba(229, 115, 115, 0.25);
}

@media (max-width: 768px) {
  .header {
    padding: 1.25rem 1.5rem;
    border-radius: 12px;
    flex-wrap: wrap;
    max-width: 100%;
  }

  .header__content {
    gap: 1rem;
    width: 100%;
    flex-wrap: wrap;
  }

  .header__title {
    font-size: 1.25rem;
    line-height: 1.3;
  }

  .header__badge {
    padding: 0.5rem 1rem;
    font-size: 0.85rem;
    min-height: 36px;
  }
}

@media (max-width: 480px) {
  .header {
    padding: 1rem 1.25rem;
    border-radius: 8px;
    max-width: 100%;
  }

  .header__content {
    gap: 0.75rem;
    flex-direction: column;
    align-items: flex-start;
  }

  .header__title {
    font-size: 1.1rem;
  }

  .header__badge {
    padding: 0.5rem 0.75rem;
    font-size: 0.75rem;
    min-height: 34px;
  }
}`,
    dependencies: {
      fonts: ['https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap'],
      icons: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css'
    }
  },
  'HeaderLogo.jsx': {
    html: `<header class="header header--logo">
  <div class="header__logoContainer">
    <div class="header__logoImage">
      <img src="https://i.pinimg.com/736x/12/01/d8/1201d8e5f751881466574e87a7b55f93.jpg" alt="Logo">
    </div>
    <div class="header__logoText">
      <h1 class="header__title">Header Logo</h1>
      <span class="header__subtitle">Design System</span>
    </div>
  </div>
  <div class="header__action">
    <i class="fas fa-rocket"></i>
    <span>Hello World</span>
  </div>
</header>`,
    css: `.header {
  width: 100%;
  padding: 1.5rem 2.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-family: "Poppins", sans-serif;
  color: #ffffff;
  border-radius: 20px;
  position: relative;
  transition: all 0.3s ease;
  box-sizing: border-box;
}

.header__logoContainer {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.header__logoImage img {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  border: 2px solid rgba(255, 255, 255, 0.3);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
  transition: all 0.3s ease;
  object-fit: cover;
}

.header__logoImage:hover img {
  transform: scale(1.05);
  border-color: rgba(255, 255, 255, 0.4);
}

.header__logoText {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.header__title {
  font-size: 1.5rem;
  font-weight: 700;
  margin: 0;
  letter-spacing: -0.5px;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.15);
}

.header__subtitle {
  font-size: 0.75rem;
  font-weight: 400;
  opacity: 0.85;
  letter-spacing: 0.5px;
  text-transform: uppercase;
}

.header__action {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1.25rem;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 20px;
  font-weight: 500;
  font-size: 0.9rem;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.25);
  transition: all 0.3s ease;
  cursor: pointer;
}

.header__action:hover {
  background: rgba(255, 255, 255, 0.3);
  transform: translateY(-1px);
}

.header__action:hover i {
  transform: translateX(2px);
}

.header--logo {
  background: linear-gradient(135deg, #c2185b 0%, #e57373 100%);
  box-shadow: 0 4px 15px rgba(194, 24, 91, 0.3);
}

@media (max-width: 768px) {
  .header {
    padding: 1.25rem 1.5rem;
    border-radius: 12px;
    flex-wrap: wrap;
    max-width: 100%;
  }

  .header__logoContainer {
    gap: 0.75rem;
    flex: 1;
    min-width: 0;
  }

  .header__logoImage img {
    width: 42px;
    height: 42px;
    flex-shrink: 0;
  }

  .header__logoText {
    gap: 0.5rem;
    min-width: 0;
    flex: 1;
  }

  .header__title {
    font-size: 1.25rem;
    line-height: 1.3;
  }

  .header__action {
    padding: 0.5rem 1rem;
    font-size: 0.85rem;
    min-height: 36px;
  }
}

@media (max-width: 480px) {
  .header {
    padding: 1rem 1.25rem;
    border-radius: 8px;
    max-width: 100%;
  }

  .header__logoContainer {
    gap: 0.5rem;
    width: 100%;
  }

  .header__logoImage img {
    width: 38px;
    height: 38px;
  }

  .header__logoText {
    gap: 0.5rem;
    flex: 1;
  }

  .header__title {
    font-size: 1.1rem;
  }

  .header__action {
    padding: 0.5rem 0.75rem;
    font-size: 0.85rem;
    min-height: 36px;
    width: 100%;
    justify-content: center;
  }
}`,
    dependencies: {
      fonts: ['https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap'],
      icons: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css'
    }
  },
  'HeaderNav.jsx': {
    html: `<header class="header header--nav">
  <div class="header__brand">
    <h1 class="header__title">Header Navigation</h1>
  </div>
  <nav class="header__nav">
    <a href="#" class="header__navItem">
      <i class="fas fa-home"></i>
      <span>Home</span>
    </a>
    <a href="#" class="header__navItem">
      <i class="fas fa-info-circle"></i>
      <span>About</span>
    </a>
    <a href="#" class="header__navItem">
      <i class="fas fa-envelope"></i>
      <span>Contact</span>
    </a>
  </nav>
</header>`,
    css: `.header {
  width: 100%;
  padding: 1.5rem 2.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-family: "Poppins", sans-serif;
  color: #ffffff;
  border-radius: 20px;
  position: relative;
  transition: all 0.3s ease;
  box-sizing: border-box;
}

.header__brand {
  display: flex;
  align-items: center;
}

.header__title {
  font-size: 1.5rem;
  font-weight: 700;
  margin: 0;
  letter-spacing: -0.5px;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.15);
}

.header__nav {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.header__navItem {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: #ffffff;
  text-decoration: none;
  font-weight: 500;
  font-size: 0.9rem;
  padding: 0.5rem 1.25rem;
  border-radius: 8px;
  transition: all 0.3s ease;
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.15);
}

.header__navItem:hover {
  background: rgba(255, 255, 255, 0.2);
  transform: translateY(-1px);
}

.header--nav {
  background: linear-gradient(135deg, #f48fb1 0%, rgba(244, 143, 177, 0.95) 100%);
  box-shadow: 0 4px 15px rgba(244, 143, 177, 0.25);
}

@media (max-width: 768px) {
  .header {
    padding: 1.25rem 1.5rem;
    border-radius: 12px;
    flex-wrap: wrap;
    max-width: 100%;
  }

  .header__title {
    font-size: 1.25rem;
    line-height: 1.3;
  }

  .header__nav {
    gap: 0.5rem;
    flex-wrap: wrap;
    width: 100%;
    margin-top: 0.5rem;
  }

  .header__navItem {
    padding: 0.5rem 1rem;
    font-size: 0.85rem;
    gap: 0.5rem;
    min-height: 40px;
    flex: 1;
    min-width: 120px;
    justify-content: center;
  }
}

@media (max-width: 480px) {
  .header {
    padding: 1rem 1.25rem;
    border-radius: 8px;
    max-width: 100%;
  }

  .header__title {
    font-size: 1.1rem;
  }

  .header__nav {
    flex-direction: column;
    gap: 0.5rem;
    width: 100%;
    margin-top: 0.75rem;
  }

  .header__navItem {
    padding: 0.75rem 1rem;
    font-size: 0.85rem;
    min-height: 44px;
    width: 100%;
    justify-content: center;
  }
}`,
    dependencies: {
      fonts: ['https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap'],
      icons: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css'
    }
  },
  'FooterSimple.jsx': {
    html: `<footer class="footer footer--simple">
  <p class="footer__text">© 2025 Madebypasya. All Rights Reserved.</p>
</footer>`,
    css: `.footer {
  width: 100%;
  color: #ffffff;
  text-align: center;
  padding: 1.5rem 1rem;
  font-family: "Poppins", sans-serif;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.footer__text {
  font-size: 1rem;
  margin: 0;
  text-align: center;
  width: 100%;
}

.footer--simple {
  background-color: #e57373;
  box-shadow: 0 2px 8px rgba(229, 115, 115, 0.3);
}

@media (max-width: 768px) {
  .footer {
    padding: 1.5rem 1.25rem;
    border-radius: 12px;
  }

  .footer__text {
    font-size: 0.9rem;
    line-height: 1.5;
  }
}

@media (max-width: 480px) {
  .footer {
    padding: 1.25rem 1rem;
    border-radius: 8px;
  }

  .footer__text {
    font-size: 0.85rem;
    line-height: 1.5;
  }
}`,
    dependencies: {
      fonts: ['https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap'],
      icons: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css'
    }
  },
  'FooterSocial.jsx': {
    html: `<footer class="footer footer--social">
  <i class="fab fa-facebook"></i>
  <i class="fab fa-instagram"></i>
  <i class="fab fa-twitter"></i>
</footer>`,
    css: `.footer {
  width: 100%;
  color: #ffffff;
  text-align: center;
  padding: 1.5rem 1rem;
  font-family: "Poppins", sans-serif;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1.5rem;
}

.footer--social {
  background: linear-gradient(135deg, #c2185b, #e57373);
  box-shadow: 0 2px 8px rgba(194, 24, 91, 0.3);
}

.footer--social i {
  font-size: 1.5rem;
  color: #ffffff;
  cursor: pointer;
  transition: all 0.3s ease;
}

.footer--social i:hover {
  transform: scale(1.3) translateY(-3px);
  color: #ffeef0;
}

@media (max-width: 768px) {
  .footer {
    padding: 1.5rem 1.25rem;
    border-radius: 12px;
    gap: 1.5rem;
    flex-wrap: wrap;
  }

  .footer--social i {
    font-size: 1.25rem;
    min-width: 44px;
    min-height: 44px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
}

@media (max-width: 480px) {
  .footer {
    padding: 1.25rem 1rem;
    border-radius: 8px;
    gap: 1.25rem;
  }

  .footer--social i {
    font-size: 1.1rem;
    min-width: 48px;
    min-height: 48px;
  }
}`,
    dependencies: {
      fonts: ['https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap'],
      icons: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css'
    }
  },
  'FooterGrid.jsx': {
    html: `<footer class="footer footer--grid">
  <div class="footer__section">
    <h4>Company</h4>
    <a href="#">About Us</a>
    <a href="#">Careers</a>
    <a href="#">Press</a>
  </div>
  <div class="footer__section">
    <h4>Support</h4>
    <a href="#">Contact</a>
    <a href="#">FAQs</a>
    <a href="#">Help Center</a>
  </div>
  <div class="footer__section">
    <h4>Legal</h4>
    <a href="#">Terms</a>
    <a href="#">Privacy</a>
    <a href="#">Cookies</a>
  </div>
</footer>`,
    css: `.footer {
  width: 100%;
  color: #ffffff;
  text-align: center;
  padding: 2rem;
  font-family: "Poppins", sans-serif;
  border-radius: 8px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  text-align: left;
}

.footer__section {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  font-size: 0.9rem;
}

.footer__section h4 {
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: #ffffff;
  font-size: 1rem;
}

.footer__section a {
  color: #ffeef0;
  text-decoration: none;
  transition: all 0.3s ease;
  padding: 0.5rem 0;
}

.footer__section a:hover {
  color: #ffffff;
  padding-left: 0.5rem;
}

.footer--grid {
  background-color: #f48fb1;
  box-shadow: 0 2px 8px rgba(244, 143, 177, 0.3);
}

@media (max-width: 768px) {
  .footer {
    padding: 2rem 1.5rem;
    border-radius: 12px;
    grid-template-columns: 1fr;
    gap: 2rem;
    text-align: center;
  }

  .footer__section {
    gap: 0.75rem;
  }

  .footer__section h4 {
    font-size: 1.1rem;
    margin-bottom: 0.75rem;
  }

  .footer__section a {
    padding: 0.75rem 0;
    font-size: 0.9rem;
  }
}

@media (max-width: 480px) {
  .footer {
    padding: 1.5rem 1rem;
    border-radius: 8px;
    gap: 1.5rem;
  }

  .footer__section {
    gap: 0.5rem;
  }

  .footer__section h4 {
    font-size: 1rem;
    margin-bottom: 0.5rem;
  }

  .footer__section a {
    padding: 0.75rem 0;
    font-size: 0.85rem;
  }
}`,
    dependencies: {
      fonts: ['https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap'],
      icons: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css'
    }
  },
  'SidebarMinimal.jsx': {
    html: `<aside class="sidebar sidebar--minimal">
  <i class="fas fa-home"></i>
  <i class="fas fa-user"></i>
  <i class="fas fa-cog"></i>
</aside>`,
    css: `.sidebar {
  padding: 1.5rem 1rem;
  color: #ffffff;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  font-family: "Poppins", sans-serif;
  border-radius: 8px;
  min-height: 300px;
  align-items: center;
  box-shadow: 0 2px 8px rgba(229, 115, 115, 0.3);
}

.sidebar i {
  font-size: 1.5rem;
  cursor: pointer;
  color: #ffffff;
  transition: all 0.3s ease;
  padding: 0.5rem;
}

.sidebar i:hover {
  transform: scale(1.2);
  color: #ffeef0;
}

.sidebar--minimal {
  background-color: #e57373;
  width: 80px;
}

@media (max-width: 768px) {
  .sidebar {
    padding: 1rem;
    min-height: auto;
    border-radius: 12px;
    width: 100%;
    flex-direction: row;
    justify-content: space-around;
    gap: 0.5rem;
  }

  .sidebar i {
    font-size: 1.3rem;
    padding: 0.75rem;
    min-width: 48px;
    min-height: 48px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 8px;
  }
}

@media (max-width: 480px) {
  .sidebar {
    padding: 0.75rem 0.5rem;
    gap: 0.5rem;
    border-radius: 8px;
  }

  .sidebar i {
    font-size: 1.3rem;
    padding: 0.5rem;
    min-width: 44px;
    min-height: 44px;
  }
}`,
    dependencies: {
      fonts: ['https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap'],
      icons: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css'
    }
  },
  'SidebarFull.jsx': {
    html: `<aside class="sidebar sidebar--full">
  <div class="sidebar__item">
    <i class="fas fa-home"></i>
    <span class="sidebar__label">Home</span>
  </div>
  <div class="sidebar__item">
    <i class="fas fa-info-circle"></i>
    <span class="sidebar__label">About</span>
  </div>
  <div class="sidebar__item">
    <i class="fas fa-envelope"></i>
    <span class="sidebar__label">Contact</span>
  </div>
</aside>`,
    css: `.sidebar {
  padding: 1.5rem 1rem;
  color: #ffffff;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  font-family: "Poppins", sans-serif;
  border-radius: 8px;
  min-height: 300px;
  box-shadow: 0 2px 8px rgba(194, 24, 91, 0.3);
}

.sidebar__item {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  cursor: pointer;
  padding: 0.75rem;
  border-radius: 8px;
  transition: all 0.3s ease;
}

.sidebar__item:hover {
  background-color: rgba(255, 255, 255, 0.1);
  transform: translateX(5px);
}

.sidebar__item i {
  font-size: 1.3rem;
  color: #ffffff;
}

.sidebar__label {
  font-size: 1rem;
  color: #ffffff;
  font-weight: 500;
}

.sidebar--full {
  background: linear-gradient(135deg, #c2185b, #e57373);
  width: 220px;
}

@media (max-width: 768px) {
  .sidebar {
    padding: 1.25rem 1rem;
    min-height: auto;
    border-radius: 12px;
    width: 100%;
  }

  .sidebar__item {
    padding: 0.75rem 1rem;
    min-height: 48px;
    gap: 0.75rem;
  }

  .sidebar__item i {
    font-size: 1.3rem;
  }

  .sidebar__label {
    font-size: 0.9rem;
  }
}

@media (max-width: 480px) {
  .sidebar {
    padding: 1rem 0.75rem;
    gap: 1rem;
    border-radius: 8px;
  }

  .sidebar__item {
    padding: 0.75rem;
    gap: 0.75rem;
    min-height: 44px;
  }

  .sidebar__item i {
    font-size: 1rem;
  }

  .sidebar__label {
    font-size: 0.85rem;
  }
}`,
    dependencies: {
      fonts: ['https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap'],
      icons: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css'
    }
  },
  'SidebarIcons.jsx': {
    html: `<aside class="sidebar sidebar--icons">
  <i class="fab fa-facebook"></i>
  <i class="fab fa-twitter"></i>
  <i class="fab fa-instagram"></i>
</aside>`,
    css: `.sidebar {
  padding: 1.5rem 1rem;
  color: #ffffff;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  font-family: "Poppins", sans-serif;
  border-radius: 8px;
  min-height: 300px;
  align-items: center;
  box-shadow: 0 2px 8px rgba(244, 143, 177, 0.3);
}

.sidebar i {
  font-size: 1.8rem;
  cursor: pointer;
  color: #ffffff;
  transition: all 0.3s ease;
  padding: 0.5rem;
}

.sidebar i:hover {
  transform: rotate(10deg) scale(1.1);
  color: #ffeef0;
}

.sidebar--icons {
  background-color: #f48fb1;
  width: 100px;
}

@media (max-width: 768px) {
  .sidebar {
    padding: 1rem;
    min-height: auto;
    border-radius: 12px;
    width: 100%;
    flex-direction: row;
    justify-content: space-around;
    gap: 0.5rem;
  }

  .sidebar i {
    font-size: 1.5rem;
    padding: 0.75rem;
    min-width: 52px;
    min-height: 52px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 12px;
  }
}

@media (max-width: 480px) {
  .sidebar {
    padding: 0.75rem 0.5rem;
    gap: 0.5rem;
    border-radius: 8px;
  }

  .sidebar i {
    font-size: 1.3rem;
    padding: 0.5rem;
    min-width: 48px;
    min-height: 48px;
  }
}`,
    dependencies: {
      fonts: ['https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap'],
      icons: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css'
    }
  }
};

export function getStandaloneCode(fileName) {
  const component = standaloneComponents[fileName];
  if (!component) {
    return null;
  }

  // Generate full HTML dengan CSS inline
  const fontLinks = component.dependencies.fonts.map(font => 
    `<link rel="preconnect" href="${font.split('?')[0]}" crossorigin>`
  ).join('\n  ') + 
  `\n  <link href="${component.dependencies.fonts[0]}" rel="stylesheet">`;

  const iconLink = `<link rel="stylesheet" href="${component.dependencies.icons}">`;

  const fullHTML = `<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Component Standalone</title>
  ${fontLinks}
  ${iconLink}
  <style>
    * {
      box-sizing: border-box;
    }

    body {
      margin: 0;
      font-family: "Poppins", sans-serif;
      display: flex;
      align-items: center;
      justify-content: center;
      min-height: 100vh;
      background: #fff5f5;
      padding: 2rem;
    }

${component.css.split('\n').map(line => '    ' + line).join('\n')}
  </style>
</head>
<body>
${component.html.split('\n').map(line => '  ' + line).join('\n')}
</body>
</html>`;

  // Generate code snippet yang bisa langsung dicopy (HTML + CSS terpisah)
  const codeSnippet = `<!-- HTML -->
${component.html}

<!-- CSS -->
<style>
${component.css}
</style>

<!-- Dependencies -->
<!-- Font: Poppins -->
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap" rel="stylesheet">

<!-- Icons: Font Awesome -->
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">`;

  return {
    fullHTML,
    codeSnippet,
    html: component.html,
    css: component.css,
    dependencies: component.dependencies
  };
}

