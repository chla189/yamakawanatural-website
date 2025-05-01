// 山川自然生活有限公司網站
'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';

export default function Home() {
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const controlNavbar = () => {
      if (typeof window !== 'undefined') {
        // 如果滑鼠懸停在導覽欄上，不要隱藏
        if (isHovered) {
          setShow(true);
          return;
        }
        
        // 向上滾動或在頂部時顯示
        if (window.scrollY < lastScrollY || window.scrollY < 10) {
          setShow(true);
        } else {
          // 向下滾動時隱藏
          setShow(false);
        }
        setLastScrollY(window.scrollY);
      }
    };

    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', controlNavbar);
      return () => {
        window.removeEventListener('scroll', controlNavbar);
      };
    }
  }, [lastScrollY, isHovered]);

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 flex flex-col">
      {/* 頂部導航欄 */}
      <nav 
        className={`fixed w-full bg-white/80 backdrop-blur-sm shadow-sm z-50 transition-transform duration-300 ${
          show ? 'translate-y-0' : '-translate-y-full'
        }`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="w-8 h-8 relative">
              <Image
                src="/images/logo-transparent.png.png"
                alt="山川自然"
                fill
                className="object-contain"
                priority
              />
            </div>
            <span className="text-lg font-semibold text-gray-800">山川自然</span>
          </div>
          <div className="hidden md:flex space-x-8">
            <a href="#about" className="text-gray-600 hover:text-gray-900 transition-colors">關於我們</a>
            <a href="#services" className="text-gray-600 hover:text-gray-900 transition-colors">服務項目</a>
            <a href="#stream-ecology" className="text-gray-600 hover:text-gray-900 transition-colors">溪流生態</a>
            <a href="#animal-monitoring" className="text-gray-600 hover:text-gray-900 transition-colors">動物監測</a>
            <a href="#contact" className="text-gray-600 hover:text-gray-900 transition-colors">聯絡我們</a>
          </div>
        </div>
      </nav>

      {/* 英雄區塊 */}
      <section className="relative h-screen flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/DJI_0735.jpg.JPG"
            alt="山川自然背景"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        <div className="relative z-10 text-center text-white">
          <div className="w-48 h-48 mx-auto mb-8 relative">
            <Image
              src="/images/logo_name.jpg"
              alt="山川自然"
              fill
              className="object-contain"
              priority
            />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">山川自然生活有限公司</h1>
          <p className="text-xl md:text-2xl mb-8">專業的生態調查與環境監測服務</p>
          <a
            href="#contact"
            className="inline-block bg-white text-gray-900 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors"
          >
            立即聯繫
          </a>
        </div>
      </section>

      {/* 關於我們 */}
      <section id="about" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-16">關於我們</h2>
            <div className="bg-white rounded-lg shadow-sm p-8 space-y-6">
              <div className="prose max-w-none">
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  本公司秉持對大自然的熱愛而設立，因夥伴們皆偏好棲息在鄉村野外的自然生活，又像山林中悠游的川流各有其性，卻能匯流聚合，奔向大海，故取名為山川自然生活有限公司。希望夥伴們能夠適性發展，共同合作為我們所棲息的環境盡一份心力。
                </p>
                <div className="grid md:grid-cols-2 gap-8 mt-8">
                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold text-gray-800">我們的理念</h3>
                    <ul className="list-disc list-inside text-gray-600 space-y-2">
                      <li>尊重自然生態系統的完整性</li>
                      <li>推動永續發展的環境政策</li>
                      <li>平衡發展與保育的需求</li>
                      <li>提供專業的環境顧問服務</li>
                    </ul>
                  </div>
                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold text-gray-800">專業服務</h3>
                    <ul className="list-disc list-inside text-gray-600 space-y-2">
                      <li>生態調查與監測</li>
                      <li>環境影響評估</li>
                      <li>生態檢核服務</li>
                      <li>溪流生態評估</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 服務項目區塊 */}
      <section id="services" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16">我們的服務</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: '生態調查', desc: '專業的生態系統調查與分析' },
              { title: '天然溪流', desc: '溪流生態系統調查與評估' },
              { title: '環境監測', desc: '持續性的環境品質監測' },
              { title: '生態旅遊', desc: '深度體驗自然生態之美' }
            ].map((service, index) => (
              <div key={index} className="p-6 border border-gray-200 rounded-lg hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
                <p className="text-gray-600">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 生態檢核服務區塊 */}
      <section id="ecological-check" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16">生態檢核服務</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: '工程提報階段',
                desc: '針對工程計畫範圍進行生態資料蒐集與生態調查，確認工程範圍圖、生態環境現況、保育對象與課題'
              },
              {
                title: '設計階段',
                desc: '根據生態調查結果，提出生態保育對策，並整合工程設計與生態保育對策，確保工程設計符合生態保育原則'
              },
              {
                title: '施工階段',
                desc: '落實生態保育對策，監測施工過程對生態環境的影響，適時調整保育措施，確保生態保育成效'
              },
              {
                title: '維護管理階段',
                desc: '定期監測評估生態環境恢復情況，進行生態環境維護管理，確保工程完工後的生態永續'
              }
            ].map((phase, index) => (
              <div key={index} className="p-8 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-xl font-semibold mb-4 text-gray-800">{phase.title}</h3>
                <p className="text-gray-600 leading-relaxed">{phase.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 天然溪流生態棲地展示 */}
      <section id="stream-ecology" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-6">天然溪流生態棲地</h2>
          <p className="text-gray-600 text-center mb-16 max-w-3xl mx-auto">
            我們致力於保護與研究台灣珍貴的天然溪流生態系統，從上游到下游的棲地特性與環境議題
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="group">
              <div className="relative h-80 overflow-hidden rounded-lg mb-4">
                <Image
                  src="/images/DJI_0735.jpg.JPG"
                  alt="上游溪流生態"
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="text-center">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">上游溪流生態</h3>
                <p className="text-gray-600">山區溪流水量豐沛，兩岸林相完整，為野生動物提供重要棲息環境</p>
              </div>
            </div>
            <div className="group">
              <div className="relative h-80 overflow-hidden rounded-lg mb-4">
                <Image
                  src="/images/IMG_1374.jpg.JPG"
                  alt="中游溪流環境"
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="text-center">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">中游溪流環境</h3>
                <p className="text-gray-600">中游段形成緩流環境，河床卵石分布，為水生生物提供多樣化的棲地</p>
              </div>
            </div>
            <div className="group">
              <div className="relative h-80 overflow-hidden rounded-lg mb-4">
                <Image
                  src="/images/DJI_0516.jpg.JPG"
                  alt="溪流與人文地景"
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="text-center">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">溪流與人文地景</h3>
                <p className="text-gray-600">溪流從山區進入平原後，與農田、聚落形成鑲嵌式的土地利用模式</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 動物監測 */}
      <section id="animal-monitoring" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-6">動物監測</h2>
          <p className="text-gray-600 text-center mb-16 max-w-3xl mx-auto">
            透過專業的監測設備，記錄並研究台灣豐富的野生動物生態
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="group">
              <div className="relative aspect-video overflow-hidden rounded-lg mb-4">
                <video
                  className="w-full h-full object-cover"
                  controls
                  playsInline
                  preload="auto"
                  crossOrigin="anonymous"
                >
                  <source src="/videos/animal1.mp4" type="video/mp4" />
                  <p>您的瀏覽器不支援影片播放。請使用現代瀏覽器如 Chrome、Firefox、Safari 或 Edge。</p>
                </video>
              </div>
              <div className="text-center">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">臺灣水鹿</h3>
                <p className="text-gray-600">台灣最大的原生鹿種，棲息於中高海拔山區</p>
              </div>
            </div>
            <div className="group">
              <div className="relative aspect-video overflow-hidden rounded-lg mb-4">
                <video
                  className="w-full h-full object-cover"
                  controls
                  playsInline
                  preload="auto"
                  crossOrigin="anonymous"
                >
                  <source src="/videos/animal2_new.mp4" type="video/mp4" />
                  <source src="/videos/animal2.MP4" type="video/mp4" />
                  <p>您的瀏覽器不支援影片播放。請使用現代瀏覽器如 Chrome、Firefox、Safari 或 Edge。</p>
                </video>
              </div>
              <div className="text-center">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">臺灣野山羊</h3>
                <p className="text-gray-600">台灣特有亞種，主要分布於中低海拔山區</p>
              </div>
            </div>
            <div className="group">
              <div className="relative aspect-video overflow-hidden rounded-lg mb-4">
                <video
                  className="w-full h-full object-cover"
                  controls
                  playsInline
                  preload="auto"
                  crossOrigin="anonymous"
                >
                  <source src="/videos/animal3_new.mp4" type="video/mp4" />
                  <source src="/videos/animal3.MP4" type="video/mp4" />
                  <p>您的瀏覽器不支援影片播放。請使用現代瀏覽器如 Chrome、Firefox、Safari 或 Edge。</p>
                </video>
              </div>
              <div className="text-center">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">黃喉貂</h3>
                <p className="text-gray-600">台灣特有亞種，分布於全島各海拔山區</p>
              </div>
            </div>
            <div className="group">
              <div className="relative aspect-video overflow-hidden rounded-lg mb-4">
                <video
                  className="w-full h-full object-cover"
                  controls
                  playsInline
                  preload="auto"
                  crossOrigin="anonymous"
                >
                  <source src="/videos/animal4.mp4" type="video/mp4" />
                  <p>您的瀏覽器不支援影片播放。請使用現代瀏覽器如 Chrome、Firefox、Safari 或 Edge。</p>
                </video>
              </div>
              <div className="text-center">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">食蟹獴</h3>
                <p className="text-gray-600">台灣特有亞種，棲息於中低海拔森林</p>
              </div>
            </div>
            <div className="group">
              <div className="relative aspect-video overflow-hidden rounded-lg mb-4">
                <video
                  className="w-full h-full object-cover"
                  controls
                  playsInline
                  preload="auto"
                  crossOrigin="anonymous"
                >
                  <source src="/videos/animal5.MP4" type="video/mp4" />
                  <p>您的瀏覽器不支援影片播放。請使用現代瀏覽器如 Chrome、Firefox、Safari 或 Edge。</p>
                </video>
              </div>
              <div className="text-center">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">藍腹鷴</h3>
                <p className="text-gray-600">台灣特有種，分布於中高海拔山區</p>
              </div>
            </div>
            <div className="group">
              <div className="relative aspect-video overflow-hidden rounded-lg mb-4">
                <video
                  className="w-full h-full object-cover"
                  controls
                  playsInline
                  preload="auto"
                  crossOrigin="anonymous"
                >
                  <source src="/videos/animal6.mp4" type="video/mp4" />
                  <p>您的瀏覽器不支援影片播放。請使用現代瀏覽器如 Chrome、Firefox、Safari 或 Edge。</p>
                </video>
              </div>
              <div className="text-center">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">臺灣野豬</h3>
                <p className="text-gray-600">台灣特有亞種，分布於全島各海拔山區</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 聯絡我們 */}
      <section id="contact" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-6">聯絡我們</h2>
          <p className="text-gray-600 text-center mb-16 max-w-3xl mx-auto">
            如果您對我們的服務有任何疑問或需求，歡迎隨時與我們聯繫
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-4">聯絡資訊</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium text-gray-800">聯絡電話</h4>
                  <p className="text-gray-600">07-323-0917</p>
                </div>
                <div>
                  <h4 className="font-medium text-gray-800">電子郵件</h4>
                  <p className="text-gray-600">chla189.tw1@gmail.com</p>
                </div>
                <div>
                  <h4 className="font-medium text-gray-800">公司名稱</h4>
                  <p className="text-gray-600">山川自然生活有限公司</p>
                  <p className="text-gray-600">Yamakawa Natural Life Ltd.</p>
                </div>
                <div>
                  <h4 className="font-medium text-gray-800">社群媒體</h4>
                  <a 
                    href="https://www.facebook.com/profile.php?id=61555458103174" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-gray-600 hover:text-blue-600 transition-colors flex items-center space-x-2"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                    </svg>
                    <span>Facebook 粉絲專頁</span>
                  </a>
                </div>
              </div>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-4">服務時間</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium text-gray-800">週一至週五</h4>
                  <p className="text-gray-600">09:00 - 18:00</p>
                </div>
                <div>
                  <h4 className="font-medium text-gray-800">週六、週日</h4>
                  <p className="text-gray-600">依約定時間</p>
                </div>
                <div>
                  <p className="text-gray-600">生態調查及實地考察服務時間依現地狀況安排，請提前與我們聯繫預約。</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 頁尾 */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 relative">
                  <Image
                    src="/images/logo-transparent.png.png"
                    alt="山川自然"
                    fill
                    className="object-contain"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-bold">山川自然</h3>
                  <p className="text-sm text-gray-400">生活有限公司</p>
                </div>
              </div>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">快速連結</h4>
              <ul className="space-y-2">
                <li><a href="#about" className="text-gray-400 hover:text-white transition-colors">關於我們</a></li>
                <li><a href="#services" className="text-gray-400 hover:text-white transition-colors">服務項目</a></li>
                <li><a href="#stream-ecology" className="text-gray-400 hover:text-white transition-colors">溪流生態</a></li>
                <li><a href="#animal-monitoring" className="text-gray-400 hover:text-white transition-colors">動物監測</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">聯絡資訊</h4>
              <ul className="space-y-2">
                <li className="text-gray-400">07-323-0917</li>
                <li className="text-gray-400">chla189.tw1@gmail.com</li>
                <li className="text-gray-400">山川自然生活有限公司</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">社群媒體</h4>
              <ul className="space-y-2">
                <li>
                  <a 
                    href="https://www.facebook.com/profile.php?id=61555458103174" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-gray-400 hover:text-white transition-colors flex items-center space-x-2"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                    </svg>
                    <span>Facebook 粉絲專頁</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
            <p>© 2024 版權所有</p>
          </div>
        </div>
      </footer>
    </main>
  );
} 