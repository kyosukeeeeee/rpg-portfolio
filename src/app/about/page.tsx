'use client'

import React, { useEffect } from "react";
import Header from "../_components/Header";
import "../_components/style/about.scss";

const About: React.FC = () => {
    useEffect(() => {
        const handleScroll = () => {
            // スクロール量を取得
            const scroll = window.scrollY;
            // 画面の高さを取得
            const windowHeight = window.innerHeight;
            // すべての.boxを取得
            const boxes = document.querySelectorAll('.about-item');
            
            boxes.forEach(function(box) {
                // boxまでの高さを取得（キャストを追加）
                const distanceToBox = (box as HTMLElement).offsetTop;
                // 下記条件が成り立つときだけboxにis-activeクラスを付与する
                if(scroll + windowHeight > distanceToBox) {
                    box.classList.add('is-active');
                }
            });
        };

        window.addEventListener('scroll', handleScroll);
        
        // クリーンアップ
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <>
            <Header />
            <div className="about-wrapper">
                {/* 自己紹介・生い立ち */}
                <div className="about-item">
                    <h2 className="title">自己紹介・生い立ち</h2>
                    <p className="content">
                        はじめまして。タカダ キョウスケと申します。<br />
                        自身は高校卒業後、機械設計の仕事を7年程経験しました。<br />
                        当時コロナウイルスが流行ったのがきっかけで、<br />
                        働き方を変えたいと思い独学でプログラミングの勉強を始めました。
                    </p>
                </div>
                {/* 職歴1 */}
                <div className="about-item">
                    <h2 className="title">Ⅰ. Web制作</h2>
                    <p>2021.01 ~ 2023.03</p>
                    <p className="content">
                        WordPressを用いた社内サイトの運用・作成をしていました。<br />
                        デザイン設計から実装まで一連の作業を実施することで、<br />
                        Webサイト制作において基本的なことは習得。
                    </p>
                    <div className="skill-set">
                        <p className="skill-title">主な使用技術</p>
                        <ul className="skill-wrapper">
                            <li className="skill-item">WordPress</li>
                            <li className="skill-item">jQuery</li>
                            <li className="skill-item">HTML</li>
                            <li className="skill-item">CSS</li>
                            <li className="skill-item">Adobe製品</li>
                        </ul>
                    </div>
                </div>
                {/* 職歴2 */}
                <div className="about-item">
                    <h2 className="title">Ⅱ. Webエンジニア</h2>
                    <p>2023.04 ~ </p>
                    <p className="content">
                        自社内で使用する簡単なWebシステムやチャットポッドを作成から始まり、<br />
                        ウエディング・業務管理・運輸系などのシステムを開発・保守しています。<br />
                        設計段階から携わることも多いです。
                    </p>
                    <div className="skill-set">
                        <p className="skill-title">主な使用技術</p>
                        <ul className="skill-wrapper">
                            <li className="skill-item">SpringBoot</li>
                            <li className="skill-item">C#</li>
                            <li className="skill-item">MySQL</li>
                            <li className="skill-item">PostgreSQL</li>
                            <li className="skill-item">Dify</li>
                            <li className="skill-item">AWS</li>
                            <li className="skill-item">Git</li>
                            <li className="skill-item">SVN</li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
}

export default About;
