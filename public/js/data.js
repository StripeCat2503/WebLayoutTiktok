const posts = [
    {
        user: {
            username: 'hieuonthego',
            avatar: '/images/accounts/acc2.jpg',
            description: 'NGUYEN MINH HIEU 3 - 22'
        },
        content: `Cách viết chữ lên xung quanh chủ thể trong Photoshop nè
        #photoshoptips #fyp #tutorials #howto #design #foryou
        <span style="font-size: 30px;">♫</span>
        original sound - MINH HIẾU - NGUYEN MINH HIEU`,
        video: '/videos/video01.mp4'
    },
    {
        user: {
            username: 'petanimal@',
            avatar: '/images/accounts/acc3.jpg',
            description: 'ANIMAL FOR FUN'
        },
        content: `This is Lion. He is battling cancer. Doesn’t stop him from having fun and enjoying a swim. Stay strong Lion 😭❤️ (ig goldentaiia) #fyp
        original sound - dog`,
        video: '/videos/video02.mp4'
    },
    {
        user: {
            username: 'beautyplace2509',
            avatar: '/images/accounts/acc4.jpg',
            description: 'BEAUTY PLACE'
        },
        content: `#this is Pakistan baby#beauty 😘#foryou #foryoupage #fyp #WhatsApp #WhatsApp status#status_loverzzz @peerjee9414`,
        video: '/videos/video03.mp4'
    },
    {
        user: {
            username: 'music4free',
            avatar: '/images/accounts/acc5.jpg',
            description: 'MUSIC WORLD'
        },
        content: `excited to be performing at the @tiktokmusicjp creator’s lab crossover live festival! make sure to check out my performance at 21:20 JST // 14:20 CET`,
        video: '/videos/video04.mp4'
    },
    {
        user: {
            username: 'domanhcuong@123',
            avatar: '/images/accounts/acc6.jpg',
            description: 'DO MANH CUONG'
        },
        content: `Nếu được trở về quá khứ bạn sẽ trở về năm bao nhiêu #m_o_p #cloudteam🌥 #_xuan07 #can_dy🍭 #xuhuong #fypシ #xh #superstar_team✨ #foryou #slow`,
        video: '/videos/video05.mp4'
    },
    {
        user: {
            username: 'fundy',
            avatar: '/images/accounts/acc7.jpg',
            description: 'FUNDY'
        },
        content: `tip: don't`,
        video: '/videos/video06.mp4'
    }
];

function loadData() {
    const htmlPosts = $('#posts');
    const htmlPostElements = [];
    posts.forEach(post => {
        const template = `
        <div class="post">
                    <div class="user-avt">
                        <img src="${post.user.avatar}" alt="avatar">
                    </div>
                    <div class="post-content-container">
                        <h4 class="username">${post.user.username}</h4>
                        <h4 class="info">${post.user.description}</h4>
                        <div class="post-content">
                            ${post.content}
                        </div>

                        <div class="user-interact">
                            <div class="user-interact-left">
                                <video autoplay controls class="video" src="${post.video}"></video>
                            </div>
                            <div class="user-interact-right">
                                <button class="btn-follow">Follow</button>
                                <div class="comments">
                                    <div class="wrapper">
                                        <div class="comment-replies">
                                            <div class="comments-inner">
                                                <div class="user-comment">
                                                    <div class="user-avt">
                                                        <img src="./images/accounts/acc1.jpg" alt="user">
                                                    </div>
                                                    <div class="user-comment-content">
                                                        <h4 class="username">DOAN HAI YEN</h4>
                                                        <p class="comment-content">Bạn dùng macbook zì zậy</p>
                                                        <div class="reply">
                                                            <div>5 - 15</div>
                                                            <div>Reply</div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="heart">
                                                    <div>
                                                        <img src="./images/icon_heart_filled.svg" alt="heart">
                                                    </div>
                                                    <span class="heart-num">10</span>
                                                </div>
                                            </div>

                                            <!-- Replies -->
                                            <div class="reply-list">
                                                <div class="comments-inner">
                                                    <div class="user-comment">
                                                        <div class="user-avt">
                                                            <img src="./images/accounts/acc2.jpg" alt="user">
                                                        </div>
                                                        <div class="user-comment-content">
                                                            <h4 class="username">NGUYEN MINH HIEU
                                                                <span
                                                                    style="color: #D3274E; margin-left: 10px; font-size: 16px;">Creator</span>
                                                            </h4>
                                                            <p class="comment-content">Mình dùng mb 16 inch</p>
                                                            <div class="reply">
                                                                <div>6 - 15</div>
                                                                <div>Reply</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="heart">
                                                        <div>
                                                            <i class="far fa-heart heart-outline"></i>
                                                        </div>
                                                        <span class="heart-num">3</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="comment-replies">
                                            <div class="comments-inner">
                                                <div class="user-comment">
                                                    <div class="user-avt">
                                                        <img src="./images/accounts/acc7.jpg" alt="user">
                                                    </div>
                                                    <div class="user-comment-content">
                                                        <h4 class="username">NGUYEN THI CAM ANH</h4>
                                                        <p class="comment-content">Bạn có yêu mèo không?</p>
                                                        <div class="reply">
                                                            <div>7 - 15</div>
                                                            <div>Reply</div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="heart">
                                                    <div>
                                                        <img src="./images/icon_heart_filled.svg" alt="heart">
                                                    </div>
                                                    <span class="heart-num">5</span>
                                                </div>
                                            </div>

                                            <!-- Replies -->
                                            <div class="reply-list">
                                                <div class="comments-inner">
                                                    <div class="user-comment">
                                                        <div class="user-avt">
                                                            <img src="./images/accounts/acc2.jpg" alt="user">
                                                        </div>
                                                        <div class="user-comment-content">
                                                            <h4 class="username">NGUYEN MINH HIEU
                                                                <span
                                                                    style="color: #D3274E; margin-left: 10px; font-size: 16px;">Creator</span>
                                                            </h4>
                                                            <p class="comment-content">Có mình rất thích mèo</p>
                                                            <div class="reply">
                                                                <div>5 - 15</div>
                                                                <div>Reply</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="heart">
                                                        <div>
                                                            <img src="./images/icon_heart_filled.svg" alt="heart">
                                                        </div>
                                                        <span class="heart-num">56</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="comment-replies">
                                            <div class="comments-inner">
                                                <div class="user-comment">
                                                    <div class="user-avt">
                                                        <img src="./images/accounts/acc8.jpg" alt="user">
                                                    </div>
                                                    <div class="user-comment-content">
                                                        <h4 class="username">DOAN QUANG HAI</h4>
                                                        <p class="comment-content">Anh bạn có chơi guitar không?</p>
                                                        <div class="reply">
                                                            <div>9 - 15</div>
                                                            <div>Reply</div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="heart">
                                                    <div>
                                                        <img src="./images/icon_heart_filled.svg" alt="heart">
                                                    </div>
                                                    <span class="heart-num">121</span>
                                                </div>
                                            </div>

                                            <!-- Replies -->
                                            <div class="reply-list">
                                                <div class="comments-inner">
                                                    <div class="user-comment">
                                                        <div class="user-avt">
                                                            <img src="./images/accounts/acc2.jpg" alt="user">
                                                        </div>
                                                        <div class="user-comment-content">
                                                            <h4 class="username">NGUYEN MINH HIEU
                                                                <span
                                                                    style="color: #D3274E; margin-left: 10px; font-size: 16px;">Creator</span>
                                                            </h4>
                                                            <p class="comment-content">Không mình chơi Piano :v</p>
                                                            <div class="reply">
                                                                <div>2 - 15</div>
                                                                <div>Reply</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="heart">
                                                        <div>
                                                            <i class="far fa-heart heart-outline"></i>
                                                        </div>
                                                        <span class="heart-num">50</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="comment-actions">
                                        <div class="heart">
                                            <svg class="heart-icon" height="20" viewBox="0 -20 464 464" width="20"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <path class="heart-hover"
                                                    d="m340 0c-44.773438.00390625-86.066406 24.164062-108 63.199219-21.933594-39.035157-63.226562-63.19531275-108-63.199219-68.480469 0-124 63.519531-124 132 0 172 232 292 232 292s232-120 232-292c0-68.480469-55.519531-132-124-132zm0 0"
                                                    fill="#636464" />
                                                <path class="heart-hover"
                                                    d="m32 132c0-63.359375 47.550781-122.359375 108.894531-130.847656-5.597656-.769532-11.242187-1.15625025-16.894531-1.152344-68.480469 0-124 63.519531-124 132 0 172 232 292 232 292s6-3.113281 16-8.992188c-52.414062-30.824218-216-138.558593-216-283.007812zm0 0"
                                                    fill="#636464" />
                                            </svg>
                                        </div>
                                        <div class="comment-input">
                                            <input type="text" placeholder="Add comment..." />
                                            <div class="action-group">
                                                <img src="./images/icon_attach.svg" alt="attach" />
                                                <img style="margin-left: 8px;" src="./images/icon_smile_emotion.svg"
                                                    alt="emotion" />
                                            </div>
                                        </div>
                                        <div class="share">
                                            <img src="./images/icon_share_gray.svg" alt="share">
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        `

        htmlPostElements.push(template);
    })

    htmlPosts.html(htmlPostElements.join(''));
}

$(document).ready(() =>{
    loadData();
})