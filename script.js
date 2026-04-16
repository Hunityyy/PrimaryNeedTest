const dimensions = [
    "稳定的人际关系", "好奇心", "自主", "情欲与性欲", "安全感", "被重视和受关注", "平等待遇和公平"
];

// 题目数据结构示例
const questionsData = [
    {
        name: "稳定的人际关系",
        past: [
            "我觉得我最重要的亲人理解我。",
            "在家庭中彼此能够互相信任。",
            "我在我的社交环境中有归属感。",
            "在我需要支持的时候，我最重要的亲人保护我、支持我。",
            "在家庭中，我感受到了彼此间的细微关怀。",
            "我感到我最重要的亲人无条件地爱着我。",
            "我体验到温柔和温暖。",
            "我认为我是父母期待得到的孩子。",
            "我最重要的亲人有足够的时间陪伴我，在我需要他们的时候在我身边。",
            "如果家庭中发生争吵，我们也会再次和好如初。"
        ],
        present: [
            "我和我最重要的亲人之间的关系是稳定和可靠的。",
            "我在亲密关系或家庭中感到安全。",
            "其他人喜欢我也接受我。",
            "我觉得最亲近的人理解我。",
            "我觉得我在我的社交环境中有归属感。",
            "在我的朋友或家人中，我觉得自己很受欢迎。",
            "我周围有可以倾诉和让我打开心扉的人。",
            "我有一个无条件爱我并支持我的伴侣。",
            "有人总是为我腾出时间，并在我需要时提供帮助。",
            "我重视的人也需要我。"
        ]
    },
    // 其他维度您可以按照上面的格式继续添加
    {
        name: "被重视和受关注",
        past: ["我最重要的亲人关注并培养了我的兴趣和能力。",
            "在我的童年时期，我得到了足够的关注。",
            "我最重要的亲人给予了我足够的赞扬和认可。",
            "我最重要的亲人让我觉得我对他们很重要。",
            "我最重要的亲人认真对待我的感受和需求，不会试图说服我改变它们。",
            "我为自己感到骄傲。",
            "作为一个孩子，我通常感到很自在。",
            "我认为很多人喜欢我",
            "别人很乐意邀请我参加活动、庆祝、派对等。",
            "别人喜欢我的外表。"],
        present: ["其他人很在意我。",
            "我会受到关注和尊重。",
            "我的职业能力被肯定。",
            "我的感受和需求得到了认真对待。",
            "尽管我有缺点和错误，但我在意的人仍然喜欢我。",
            "我感觉自己很自在。",
            "在工作中，经常有人征询我的意见。",
            "我喜欢我的外表。",
            "有些事让我感到自豪。",
            "我可以从容地让别人先行，偶尔保持低调。"]
    },
    {
        name: "平等待遇和公平",
        past: ["我的需求通常和他人的需求一样受到重视。",
            "没有人由于某种莫名其妙的原因抢在我前面被选中。",
            "我不必忍受不公平的惩罚。",
            "在我的家庭里没有人被压迫。",
            "在我的家庭中，公平和平等是重要的价值观。",
            "我始终觉得自己很安全，没受到不公平待遇。",
            "在我的家中有人做出了公正的榜样。",
            "我乐于与他人分享。",
            "我最重要的亲人在我受到不公平待遇时会支持我。",
            "我能轻松地放弃某些东西或能礼让他人。"],
        present: ["我的需求和他人的同样重要。",
            "在私人关系中，我觉得自己会受到公平对待。",
            "我很少感到嫉妒。",
            "在我和我的同伴之间，给予和获取是平衡的。",
            "如果我觉得合适，我可以让别人优先。",
            "我不觉得受到了不公平的待遇。",
            "我很愿意与他人分享。",
            "我对不公平的待遇很敏感，即使这跟我无关。",
            "我在私人生活和社会中致力于维护公平正义。",
            "总体而言，我觉得在职场上受到了公平对待。"]
    },
    {
    name: "情欲和性欲",
    past: ["我最重要的亲人对我进行过坦诚和适龄的性教育。",
        "我最重要的亲人告诉我，性欲和情欲对于幸福生活很重要。",
        "我最重要的亲人允许我无忧无虑地探索和解答我儿时的性好奇。",
        "作为青少年，我感到自己的身体魅力得到了他人的认可。",
        "其他人尊重我的隐私。",
        "我总可以向某些人倾诉这方面的问题。",
        "认为性是肮脏或罪恶的态度并没有影响到我。",
        "电影或网络视频并没有成为自己性行为的标准。",
        "没有人试图强迫性侵我。",
        "我有可以谈论情爱之事的朋友。"],
    present: ["在我的生活中，情趣和性爱有着重要的地位。",
        "我对与我不同性取向的人并无偏见。",
        "我可以建立私密的关系。",
        "我享受我的性生活。",
        "我不会让别人对我滥用他们对性欲。",
        "对我来说，性不是一种竞技运动。",
        "我喜欢性幻想。",
        "当我没有性欲时，我可以承认并清楚地表达这一点。",
        "我尊重他人的性界限。",
        "我可以表达我的情欲和性欲望。"]
    },
    {
    name: "安全感",
    past: ["我的家对我来说是一个安全的地方。",
        "我感到害怕时，我最重要的亲人会站在我这一边。",
        "我在家庭之外的生活空间也感到安全。",
        "我的家庭有着稳定的经济来源。",
        "在家庭的支持下，我觉得我能够应对不同生活阶段的挑战。",
        "我受到我最重要的亲人的保护，且不是过分保护。",
        "我的家庭成员没有受到重病的威胁。",
        "我没有受到过身体上的攻击，或者随着年龄增长，我能够自己保护自己。",
        "我从来没有对入室抢劫或其他所谓的危险有过多的恐惧。",
        "我对自己能够承担哪些风险有着准确的判断。"],
    present: ["我相信未来。",
        "我所拥有的，不会被任何人轻易夺走。",
        "我能够应对生活的挑战。",
        "我有能力适应必要的变化及伴随而来的不确定性。",
        "我在私人生活和职业生涯中可以信赖我最重要的亲人，他们也信任我。",
        "我学会了正确评估危险。",
        "凡是有风险的地方，我都做好了相应的防范准备。",
        "我做好了恰如其分的经济保障准备。",
        "我会定期做体检。",
        "我相信自己不会犯严重错误。"]
    },
    {
    name: "好奇心",
    past: ["我最重要的亲人支持我的好奇心和求知欲。",
        "我喜欢探索新事物。",
        "我最重要的亲人鼓励我培养自发能力。",
        "我最重要的亲人自己也对新事物持开放态度。",
        "我有足够的时间和空间来获得新的经验。",
        "我经常寻求新的挑战和冒险。",
        "当我最重要的亲人不知道我在哪里的时候，他们并没有过度担忧。",
        "当我想尝试新事物时，我也可以冒犯或激怒他人。",
        "即使我有时违背了最重要的亲人的建议，他们依然可以接受我。",
        "我喜欢意外的惊喜，对很多事情都感到好奇。"],
    present: ["我喜欢尝试新事物。",
        "我喜欢接受新任务。",
        "我喜欢随性且充满童趣的生活。",
        "我头脑灵活，求知欲强，宽容开放。",
        "我喜欢结实新朋友，了解新文化。",
        "我喜欢新的挑战，让自己感到有活力。",
        "我敢于冒险。",
        "我对他人观点充满好奇。",
        "我喜欢惊喜。",
        "我不断寻找新的目标，以便更好地发展自我。"]
    },
    {
    name: "独立自主",
    past: ["我最重要的亲人鼓励我表达自己的意愿。",
        "我最重要的亲人给了我适合我年龄的自由空间。",
        "只要是我觉得重要的是，我就会去做。",
        "我的父母和老师赞扬并鼓励我独立自主的行为。",
        "我可以接受我自己的样子。",
        "我对自己很自信。",
        "我允许自己犯错误。",
        "我有勇气捍卫自己的观点。",
        "示弱对我来说并不是什么大问题。",
        "我不会主动迎合他人的期望。"],
    present: ["我想做什么就会去做。",
        "我对我的生活负责。",
        "我觉得自己可以独立做出生活中的重要决定。",
        "我关注自己的需求。",
        "我能够接受合理的批评。",
        "我能够与他人划清界限。",
        "我可以通过自己的努力去改变现状。",
        "我意识到并接受自己的界限。",
        "我尊重他人的界限和需求。",
        "我按照自己的价值观生活。"]
    },
];

let currentDimensionIndex = 0;
const results = {
    past: [], 
    presentScore: [],
    presentImportance: []
};

function initQuiz() {
    renderQuestion();
}

function renderQuestion() {
    const data = questionsData[currentDimensionIndex];
    if (!data) return;
    
    document.getElementById('dimension-title').innerText = `${data.name} (${currentDimensionIndex + 1}/${dimensions.length})`;
    
    let html = '';
    
    // 过去部分：仅显示同意度
    html += '<div class="section-header"><h3>第一部分：过去的情况</h3><p>请评价您对以下描述的同意程度 (0-10分)</p></div>';
    data.past.forEach((q, i) => {
        html += createRatingHTML(`past-${i}`, q, '同意度');
    });

    // 现在部分：同时显示同意度和重要性
    html += '<div class="section-header"><h3>第二部分：现在的情况</h3><p>请评价您对以下描述的同意程度值，以及该项对您的重要性 (0-10分)</p></div>';
    data.present.forEach((q, i) => {
        html += createPresentRatingHTML(`present-${i}`, q);
    });

    document.getElementById('questions').innerHTML = html;
}

function createRatingHTML(id, text, label) {
    return `
        <div class="question-item">
            <label class="question-text">${text}</label>
            <div class="rating-row">
                <span class="label-text">${label}：</span>
                <div class="rating-container">
                    <span>0</span>
                    <input type="range" id="${id}" min="0" max="10" value="5" oninput="updateVal('${id}', this.value)">
                    <span>10</span>
                    <span class="rating-value" id="val-${id}">5</span>
                </div>
            </div>
        </div>
    `;
}

function createPresentRatingHTML(id, text) {
    return `
        <div class="question-item">
            <label class="question-text">${text}</label>
            <div class="rating-row">
                <span class="label-text">同意度：</span>
                <div class="rating-container">
                    <span>0</span>
                    <input type="range" id="${id}-score" min="0" max="10" value="5" oninput="updateVal('${id}-score', this.value)">
                    <span>10</span>
                    <span class="rating-value" id="val-${id}-score">5</span>
                </div>
            </div>
            <div class="rating-row">
                <span class="label-text">重要性：</span>
                <div class="rating-container">
                    <span>0</span>
                    <input type="range" id="${id}-imp" min="0" max="10" value="5" oninput="updateVal('${id}-imp', this.value)">
                    <span>10</span>
                    <span class="rating-value" id="val-${id}-imp">5</span>
                </div>
            </div>
        </div>
    `;
}

window.updateVal = function(id, val) {
    document.getElementById(`val-${id}`).innerText = val;
};

document.getElementById('next-btn').onclick = () => {
    saveCurrentAnswers();
    
    if (currentDimensionIndex < dimensions.length - 1) {
        currentDimensionIndex++;
        renderQuestion();
        window.scrollTo(0, 0);
    } else {
        showResults();
    }
};

function saveCurrentAnswers() {
    const data = questionsData[currentDimensionIndex];
    
    // 计算过去平均分
    let pastSum = 0;
    data.past.forEach((_, i) => {
        pastSum += parseInt(document.getElementById(`past-${i}`).value);
    });
    results.past.push(pastSum / data.past.length);

    // 计算现在同意度平均分和重要性平均分
    let presentScoreSum = 0;
    let presentImpSum = 0;
    data.present.forEach((_, i) => {
        presentScoreSum += parseInt(document.getElementById(`present-${i}-score`).value);
        presentImpSum += parseInt(document.getElementById(`present-${i}-imp`).value);
    });
    results.presentScore.push(presentScoreSum / data.present.length);
    results.presentImportance.push(presentImpSum / data.present.length);
}

function showResults() {
    document.getElementById('question-view').style.display = 'none';
    document.getElementById('result-view').style.display = 'block';
    renderChart();
}

function renderChart() {
    const ctx = document.getElementById('radarChart').getContext('2d');
    
    const chartData = {
        labels: dimensions,
        datasets: [
            {
                label: '过去同意度',
                data: results.past,
                fill: true,
                backgroundColor: 'rgba(54, 162, 235, 0.2)',
                borderColor: 'rgb(54, 162, 235)',
                pointBackgroundColor: 'rgb(54, 162, 235)',
                hidden: false
            },
            {
                label: '现在同意度',
                data: results.presentScore,
                fill: true,
                backgroundColor: 'rgba(255, 99, 132, 0.2)',
                borderColor: 'rgb(255, 99, 132)',
                pointBackgroundColor: 'rgb(255, 99, 132)',
                hidden: false
            },
            {
                label: '现在重要性',
                data: results.presentImportance,
                fill: true,
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                borderColor: 'rgb(75, 192, 192)',
                pointBackgroundColor: 'rgb(75, 192, 192)',
                hidden: false
            }
        ]
    };

    const config = {
        type: 'radar',
        data: chartData,
        options: {
            elements: {
                line: { borderWidth: 3 }
            },
            scales: {
                r: {
                    angleLines: { display: true },
                    suggestedMin: 0,
                    suggestedMax: 10
                }
            },
            plugins: {
                legend: {
                    display: true,
                    onClick: (e, legendItem, legend) => {
                        const index = legendItem.datasetIndex;
                        const ci = legend.chart;
                        if (ci.isDatasetVisible(index)) {
                            ci.hide(index);
                            legendItem.hidden = true;
                        } else {
                            ci.show(index);
                            legendItem.hidden = false;
                        }
                    }
                }
            }
        }
    };

    new Chart(ctx, config);

    // 添加下载功能
    document.getElementById('download-btn').onclick = function() {
        const link = document.createElement('a');
        link.download = '测试结果雷达图.png';
        // 为了下载时包含背景色，可以先将 canvas 转为数据 URL
        link.href = document.getElementById('radarChart').toDataURL('image/png');
        link.click();
    };
}

initQuiz();
