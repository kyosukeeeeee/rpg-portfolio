'use client'

import React, { useEffect } from "react";
import Header from "../_components/Header";
import Character from "../_components/Character";
import { Typewriter } from 'react-simple-typewriter';

import "../_components/style/about.scss";

const About: React.FC = () => {
    useEffect(() => {
        const handleScroll = () => {
            // スクロール量を取得
            const scroll = window.scrollY;
            // 画面の高さを取得
            const windowHeight = window.innerHeight - 300;
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
                <h2 className="page-title">
                    <Typewriter
                        words={["About me..."]}
                        loop={1}
                        cursor
                        cursorStyle='_'
                        typeSpeed={120}
                        deleteSpeed={100}
                        delaySpeed={1000}
                    />
                </h2>
                {/* 自己紹介・生い立ち */}
                <div className="about-item">
                    <h3 className="title">自己紹介・生い立ち</h3>
                    <p className="content">
                        はじめまして。タカダ キョウスケと申します。<br />
                        自身は高校卒業後、機械設計の仕事を7年程経験しました。<br />
                        当時コロナウイルスが流行ったのがきっかけで、<br />
                        働き方を変えたいと思い独学でプログラミングの勉強を始めました。
                    </p>
                    <Character num={1} />
                </div>
                {/* 職歴1 */}
                <div className="about-item">
                    <h3 className="title">Ⅰ. Web制作</h3>
                    <p>2021.01 ~ 2023.03</p>
                    <p className="content">
                        WordPressを用いた社内サイトの運用・作成をしていました。<br />
                        デザイン設計から実装まで一連の作業を実施することで、<br />
                        Webサイト制作において基本的なことは習得。
                    </p>
                    <div className="skill-set">
                        <p className="skill-title">主な使用技術</p>
                        <ul className="skill-wrapper">
                            <li className="skill-item">
                                <span>WordPress</span>
                                テーマ制作から可能です。メインクエリ・サブクエリの理解もしています。
                            </li>
                            <li className="skill-item">
                                <span>jQuery</span>
                                モダンな動きの実装ができます。
                            </li>
                            <li className="skill-item">
                                <span>HTML</span>
                                タグの意味を理解し、適切に扱えます。
                            </li>
                            <li className="skill-item">
                                <span>CSS</span>
                                レスポンシブデザインも実装可能です。
                            </li>
                            <li className="skill-item">
                                <span>Adobe製品</span>
                                フォトショ、イラレ、XDなど基本的な操作はできます。
                            </li>
                        </ul>
                    </div>
                    <Character num={2} />
                </div>
                {/* 職歴2 */}
                <div className="about-item">
                    <h3 className="title">Ⅱ. Webエンジニア</h3>
                    <p>2023.04 ~ </p>
                    <p className="content">
                        自社内で使用する簡単なWebシステムやチャットポッドを作成から始まり、<br />
                        ウエディング・業務管理・運輸系などのシステムを開発・保守しています。<br />
                        設計段階から携わることも多いです。
                    </p>
                    <div className="skill-set">
                        <p className="skill-title">主な使用技術</p>
                        <ul className="skill-wrapper">
                            <li className="skill-item">
                                <span>SpringBoot</span>
                                MVCモデル・DIを理解しアプリケーションの実装ができます。
                            </li>
                            <li className="skill-item">
                                <span>C#</span>
                                一般的なアプリケーションを実装できます。
                            </li>
                            <li className="skill-item">
                                <span>MySQL/PostgreSQL</span>
                                RDBを扱えます。ウインド関数まで使用できます。
                            </li>
                            <li className="skill-item">
                                <span>Dify</span>
                                MessageAPIと組み合わせてBotの作成を経験しました。
                            </li>
                            <li className="skill-item">
                                <span>AWS</span>
                                一般的なベストプラクティスを提案できます。
                            </li>
                            <li className="skill-item">
                                <span>Git/SVN</span>
                                チーム開発ができます。Gitフローの理解があります。
                            </li>
                        </ul>
                    </div>
                    <Character num={3} />
                </div>
            </div>
        </>
    );
}

export default About;
