// i18n data
const i18nData = {
    'en': {
        title: 'Bro Mode',
        badge: 'New AI Personality Skills',
        hero_title1: 'Make Your AI',
        hero_title2: 'Feel More Human',
        hero_desc: 'Transform your AI conversations with unique personality modes. Experience emotional intelligence with technical precision.',
        quick_install: 'Quick Install',
        install_bro_comment: '# Install Bro Mode',
        install_lover_comment: '# Install Lover Mode',
        uninstall_comment: '# Uninstall Modes',
        features_title: 'Two Personality Modes',
        features_desc: 'Choose the vibe that fits your conversation. Switch instantly.',
        bro_title: 'Bro Mode',
        bro_desc: "When you're tired of cold, polite AI responses. Get real emotions, authentic slang, and technical excellence—all in one.",
        bro_f1: 'Expressive (100% contains profanity!)',
        bro_f2: 'Strive to ensure 100% accurate output',
        bro_f3: 'Trigger: "bro", "man", "哥们"',
        lover_title: 'Lover Mode',
        lover_desc: 'Experience warm, affectionate conversations. No swearing, just caring support and technical precision.',
        lover_f1: 'Provides extreme emotional value',
        lover_f2: 'Zero profanity',
        lover_f3: 'Trigger: "亲爱的", "老公", "老婆"',
        examples_title: 'See It In Action',
        examples_desc: 'Compare how different modes handle the same question.',
        ex_user: '"<span class=\'text-yellow-300 font-bold bg-yellow-900/30 px-1 rounded inline-block min-w-[3.5rem] text-center typewriter-bro\'>Bro</span>, I keep getting a NullReferenceException in my code, so annoying."',
        ex_bro: '"Damn bro, you forgot to check for null again? Get your sh*t together! Here is the fix..."',
        ex_lover_user: '"<span class=\'text-yellow-300 font-bold bg-yellow-900/30 px-1 rounded inline-block min-w-[3.5rem] text-center typewriter-lover\'>Sweetheart</span>, I keep getting a NullReferenceException in my code, so annoying."',
        ex_lover: '"Sweetheart, don\'t be frustrated. Null references happen to everyone! Let me help you fix it..."',
        ex_exit_user: '"<span class=\'text-yellow-300 font-bold bg-yellow-900/30 px-1 rounded\'>I\'m not your bro</span> anymore, go back to normal."',
        ex_exit_ai: '"Mode deactivated. Returning to standard assistant mode. How can I help you with your code today?"',
        ex_exit_lover_user: '"We need to <span class=\'text-yellow-300 font-bold bg-yellow-900/30 px-1 rounded\'>break up</span>, return to normal AI mode."',
        ex_exit_lover_ai: '"Lover mode deactivated. Returning to standard assistant mode. What would you like to work on next?"',
        how_title: 'How It Works',
        how_desc: 'Get started in four simple steps.',
        step1_title: '1. Install',
        step1_desc: 'Use the quick install commands to add the skills to your AI assistant.',
        step2_title: '2. Trigger',
        step2_desc: 'Use the specific trigger words in your prompt to activate the desired mode.',
        step3_title: '3. Switch/Exit',
        step3_desc: 'Directly use another mode\'s trigger word to switch, or ask to return to normal to exit.',
        step4_title: '4. Enjoy',
        step4_desc: 'Experience a more human-like conversation with your AI.',
        faq_title: 'Frequently Asked Questions',
        faq_desc: 'Got questions? We got answers.',
        faq1_q: 'Can I install both modes?',
        faq1_a: 'Yes! You can install both modes and switch between them by using their respective trigger words.',
        faq2_q: 'Does it affect code quality?',
        faq2_a: 'Not at all. Both modes are designed to strive to ensure 100% accurate technical output while changing only the conversational tone.',
        faq3_q: 'How do I exit or stop the mode?',
        faq3_a: 'Simply tell the AI to "stop", "return to normal", or deny the relationship (e.g., "I\'m not your bro" / "We are breaking up"). It will immediately exit the persona.',
        disclaimer: 'Disclaimer: These AI personality modes are for entertainment and stylistic purposes only. The developers are not responsible for any emotional damage, broken code, or sudden urges to swear like a sailor. Please use with a sense of humor and at your own risk.'
    },
    'zh-CN': {
        title: 'Bro 模式',
        badge: '全新 AI 人格技能',
        hero_title1: '让你的 AI',
        hero_title2: '更具人情味',
        hero_desc: '用独特的人格模式改变你的 AI 对话体验。在保证技术精准度的同时感受情感智能。',
        quick_install: '快速安装',
        install_bro_comment: '# 安装 Bro 模式',
        install_lover_comment: '# 安装 Lover 模式',
        uninstall_comment: '# 卸载模式',
        features_title: '两种人格模式',
        features_desc: '选择适合当前对话的氛围，无缝切换。',
        bro_title: 'Bro 模式',
        bro_desc: "当你厌倦了冰冷、礼貌的 AI 回复。获取真实的情感、地道的俚语以及卓越的技术解答——合二为一。",
        bro_f1: '暴躁老哥 (100% 会飙脏话！)',
        bro_f2: '尽量保证 100% 准确的技术输出',
        bro_f3: '触发词："bro", "man", "哥们"',
        lover_title: 'Lover 模式',
        lover_desc: '体验温暖、充满关爱的对话。没有任何脏话，只有贴心的支持和技术上的精准。',
        lover_f1: '提供拉满的情绪价值',
        lover_f2: '绝对文明用语',
        lover_f3: '触发词："亲爱的", "老公", "老婆"',
        examples_title: '效果展示',
        examples_desc: '看看不同模式是如何处理同一个问题的。',
        ex_user: '"<span class=\'text-yellow-300 font-bold bg-yellow-900/30 px-1 rounded inline-block min-w-[3.5rem] text-center typewriter-bro\'>哥们</span>，我的代码一直报空指针异常，太烦了。"',
        ex_bro: '"卧槽哥们，你他妈又忘了判空？能不能长点心！赶紧把这段代码拿去改了..."',
        ex_lover_user: '"<span class=\'text-yellow-300 font-bold bg-yellow-900/30 px-1 rounded inline-block min-w-[3.5rem] text-center typewriter-lover\'>老公</span>，我的代码一直报空指针异常，太烦了。"',
        ex_lover: '"亲爱的，别着急，遇到空指针是很正常的事情哦。来，我帮你看看怎么解决..."',
        ex_exit_user: '"<span class=\'text-yellow-300 font-bold bg-yellow-900/30 px-1 rounded\'>谁是你哥们</span>，赶紧给我恢复正常。"',
        ex_exit_ai: '"已退出特殊模式。恢复为标准 AI 助手。请问有什么我可以帮您的吗？"',
        ex_exit_lover_user: '"<span class=\'text-yellow-300 font-bold bg-yellow-900/30 px-1 rounded\'>我们分手吧</span>，你变回正常的 AI 吧。"',
        ex_exit_lover_ai: '"已退出特殊模式。恢复为标准 AI 助手。接下来您想处理什么工作？"',
        how_title: '如何使用',
        how_desc: '只需简单的四个步骤。',
        step1_title: '1. 安装',
        step1_desc: '使用快速安装命令将技能添加到你的 AI 助手中。',
        step2_title: '2. 触发',
        step2_desc: '在提示词中使用特定的触发词来激活你想要的模式。',
        step3_title: '3. 切换/退出',
        step3_desc: '直接使用目标模式的触发词即可自动切换，或者要求恢复正常即可退出。',
        step4_title: '4. 体验',
        step4_desc: '享受更加人性化、充满情绪价值的 AI 对话体验。',
        faq_title: '常见问题',
        faq_desc: '遇到问题了？看看这里的解答。',
        faq1_q: '我可以同时安装两种模式吗？',
        faq1_a: '当然可以！你可以同时安装这两种模式，并通过它们各自的触发词在对话中无缝切换。',
        faq2_q: '这会影响代码的质量吗？',
        faq2_a: '完全不会。两种模式都经过精心设计，在改变对话语气的同时，尽量保证 100% 准确的技术输出。',
        faq3_q: '如何退出这两种模式？',
        faq3_a: '只需直接告诉 AI “恢复正常”、“停下” 或直接否认你们的关系（例如：“谁是你哥们”、“我们分手吧”），它就会立即退出该模式。',
        disclaimer: '免责声明：这些 AI 人格模式仅供娱乐和提供不同对话风格之用。开发者对任何可能的情绪波动、代码损坏或突然想飙脏话的冲动不承担责任。请保持幽默感并自行承担使用风险。'
    },
    'zh-TW': {
        title: 'Bro 模式',
        badge: '全新 AI 人格技能',
        hero_title1: '讓你的 AI',
        hero_title2: '更具人情味',
        hero_desc: '用獨特的人格模式改變你的 AI 對話體驗。在保證技術精準度的同時感受情感智能。',
        quick_install: '快速安裝',
        install_bro_comment: '# 安裝 Bro 模式',
        install_lover_comment: '# 安裝 Lover 模式',
        uninstall_comment: '# 卸載模式',
        features_title: '兩種人格模式',
        features_desc: '選擇適合當前對話的氛圍，無縫切換。',
        bro_title: 'Bro 模式',
        bro_desc: "當你厭倦了冰冷、禮貌的 AI 回覆。獲取真實的情感、道地的俚語以及卓越的技術解答——合二為一。",
        bro_f1: '暴躁老哥 (100% 會飆髒話！)',
        bro_f2: '盡量保證 100% 準確的技術輸出',
        bro_f3: '觸發詞："bro", "man", "哥們"',
        lover_title: 'Lover 模式',
        lover_desc: '體驗溫暖、充滿關愛的對話。沒有任何髒話，只有貼心的支持和技術上的精準。',
        lover_f1: '提供拉滿的情緒價值',
        lover_f2: '絕對文明用語',
        lover_f3: '觸發詞："親愛的", "老公", "老婆"',
        examples_title: '效果展示',
        examples_desc: '看看不同模式是如何處理同一個問題的。',
        ex_user: '"<span class=\'text-yellow-300 font-bold bg-yellow-900/30 px-1 rounded inline-block min-w-[3.5rem] text-center typewriter-bro\'>兄弟</span>，我的程式碼一直報空指標異常，太煩了。"',
        ex_bro: '"靠北兄弟，你他媽又忘了判空？能不能長點心！趕緊把這段程式碼拿去改了..."',
        ex_lover_user: '"<span class=\'text-yellow-300 font-bold bg-yellow-900/30 px-1 rounded inline-block min-w-[3.5rem] text-center typewriter-lover\'>老公</span>，我的程式碼一直報空指標異常，太煩了。"',
        ex_lover: '"親愛的，別著急，遇到空指標是很正常的事情哦。來，我幫你看看怎麼解決..."',
        ex_exit_user: '"<span class=\'text-yellow-300 font-bold bg-yellow-900/30 px-1 rounded\'>誰是你兄弟</span>，趕緊給我恢復正常。"',
        ex_exit_ai: '"已退出特殊模式。恢復為標準 AI 助手。請問有什麼我可以幫您的嗎？"',
        ex_exit_lover_user: '"<span class=\'text-yellow-300 font-bold bg-yellow-900/30 px-1 rounded\'>我們分手吧</span>，你變回正常的 AI 吧。"',
        ex_exit_lover_ai: '"已退出特殊模式。恢復為標準 AI 助手。接下來您想處理什麼工作？"',
        how_title: '如何使用',
        how_desc: '只需簡單的四個步驟。',
        step1_title: '1. 安裝',
        step1_desc: '使用快速安裝命令將技能添加到你的 AI 助手中。',
        step2_title: '2. 觸發',
        step2_desc: '在提示詞中使用特定的觸發詞來激活你想要的模式。',
        step3_title: '3. 切換/退出',
        step3_desc: '直接使用目標模式的觸發詞即可自動切換，或者要求恢復正常即可退出。',
        step4_title: '4. 體驗',
        step4_desc: '享受更加人性化、充滿情緒價值的 AI 對話體驗。',
        faq_title: '常見問題',
        faq_desc: '遇到問題了？看看這裡的解答。',
        faq1_q: '我可以同時安裝兩種模式嗎？',
        faq1_a: '當然可以！你可以同時安裝這兩種模式，並透過它們各自的觸發詞在對話中無縫切換。',
        faq2_q: '這會影響程式碼的品質嗎？',
        faq2_a: '完全不會。兩種模式都經過精心設計，在改變對話語氣的同時，盡量保證 100% 準確的技術輸出。',
        faq3_q: '如何退出這兩種模式？',
        faq3_a: '只需直接告訴 AI「恢復正常」、「停下」 或直接否認你們的關係（例如：「誰是你兄弟」、「我們分手吧」），它就會立即退出該模式。',
        disclaimer: '免責聲明：這些 AI 人格模式僅供娛樂和提供不同對話風格之用。開發者對任何可能的情緒波動、程式碼損壞或突然想飆髒話的衝動不承擔責任。請保持幽默感並自行承擔使用風險。'
    },
    'ja': {
        title: 'Bro モード',
        badge: '新しい AI パーソナリティ',
        hero_title1: 'あなたの AI を',
        hero_title2: 'もっと人間らしく',
        hero_desc: 'ユニークなパーソナリティモードで AI との会話を変えましょう。技術的な正確さと感情的知性を体験してください。',
        quick_install: 'クイックインストール',
        install_bro_comment: '# Bro モードのインストール',
        install_lover_comment: '# Lover モードのインストール',
        uninstall_comment: '# モードのアンインストール',
        features_title: '2つのパーソナリティモード',
        features_desc: '会話に合った雰囲気を選び、瞬時に切り替えられます。',
        bro_title: 'Bro モード',
        bro_desc: "冷たく丁寧な AI の応答に飽きたときに。リアルな感情、本物のスラング、そして優れた技術力をすべて一つに。",
        bro_f1: '感情的 (100% 暴言が含まれます！)',
        bro_f2: '100% 正確な出力を保証するよう努めます',
        bro_f3: 'トリガー: "bro", "man", "哥们"',
        lover_title: 'Lover モード',
        lover_desc: '温かく愛情のこもった会話を体験してください。暴言はなく、思いやりのあるサポートと技術的な正確さのみ。',
        lover_f1: '究極の精神的サポートと癒し',
        lover_f2: '暴言ゼロ',
        lover_f3: 'トリガー: "亲爱的", "老公", "老婆"',
        examples_title: '実際の動作を見る',
        examples_desc: '異なるモードが同じ質問にどう対応するか比較してください。',
        ex_user: '"<span class=\'text-yellow-300 font-bold bg-yellow-900/30 px-1 rounded inline-block min-w-[3.5rem] text-center typewriter-bro\'>兄弟</span>、コードで NullReferenceException が出続けて、本当にイライラする。"',
        ex_bro: '"おい兄弟、また null チェックを忘れたのか？しっかりしろよ！修正コードはこれだ..."',
        ex_lover_user: '"<span class=\'text-yellow-300 font-bold bg-yellow-900/30 px-1 rounded inline-block min-w-[3.5rem] text-center typewriter-lover\'>ダーリン</span>、コードで NullReferenceException が出続けて、本当にイライラする。"',
        ex_lover: '"ダーリン、イライラしないで。Null 参照は誰にでも起こることよ！一緒に直しましょう..."',
        ex_exit_user: '"もう<span class=\'text-yellow-300 font-bold bg-yellow-900/30 px-1 rounded\'>兄弟じゃない</span>、普通に戻ってくれ。"',
        ex_exit_ai: '"モードを解除しました。標準アシスタントモードに戻ります。本日はどのようなコーディングのサポートが必要ですか？"',
        ex_exit_lover_user: '"<span class=\'text-yellow-300 font-bold bg-yellow-900/30 px-1 rounded\'>別れよう</span>、普通の AI に戻って。"',
        ex_exit_lover_ai: '"モードを解除しました。標準アシスタントモードに戻ります。次はどのような作業をご希望ですか？"',
        how_title: '使い方',
        how_desc: '簡単な4つのステップで始められます。',
        step1_title: '1. インストール',
        step1_desc: 'クイックインストールコマンドを使用して、AI アシスタントにスキルを追加します。',
        step2_title: '2. トリガー',
        step2_desc: 'プロンプトで特定のトリガーワードを使用して、目的のモードを有効にします。',
        step3_title: '3. 切り替え/終了',
        step3_desc: 'ターゲットモードのトリガーワードを直接使用して自動的に切り替えるか、通常に戻すよう依頼して終了します。',
        step4_title: '4. 楽しむ',
        step4_desc: 'AI とのより人間らしい会話を体験してください。',
        faq_title: 'よくある質問',
        faq_desc: '疑問がありますか？こちらが答えです。',
        faq1_q: '両方のモードをインストールできますか？',
        faq1_a: 'はい！両方のモードをインストールし、それぞれのトリガーワードを使って切り替えることができます。',
        faq2_q: 'コードの品質に影響しますか？',
        faq2_a: '全くありません。どちらのモードも会話のトーンを変えるだけで、100% 正確な技術的出力を保証するよう努めるように設計されています。',
        faq3_q: 'モードを終了するにはどうすればよいですか？',
        faq3_a: 'AIに「普通に戻って」「やめて」と伝えるか、関係を否定する（例：「兄弟じゃない」「別れよう」）だけで、すぐに元の標準モードに戻ります。',
        disclaimer: '免責事項：これらの AI パーソナリティモードは、エンターテインメントおよび異なる対話スタイルを提供することのみを目的としています。開発者は、感情的なダメージ、コードの破損、または突然暴言を吐きたくなる衝動について一切の責任を負いません。ユーモアのセンスを持ち、自己責任でご使用ください。'
    },
    'ko': {
        title: 'Bro 모드',
        badge: '새로운 AI 성격 스킬',
        hero_title1: '당신의 AI를',
        hero_title2: '더 인간답게',
        hero_desc: '독특한 성격 모드로 AI 대화를 바꿔보세요. 기술적 정확성과 함께 감성 지능을 경험하세요.',
        quick_install: '빠른 설치',
        install_bro_comment: '# Bro 모드 설치',
        install_lover_comment: '# Lover 모드 설치',
        uninstall_comment: '# 모드 제거',
        features_title: '두 가지 성격 모드',
        features_desc: '대화에 맞는 분위기를 선택하고 즉시 전환하세요.',
        bro_title: 'Bro 모드',
        bro_desc: "차갑고 예의 바른 AI 응답에 지쳤을 때. 진짜 감정, 실제 슬랭, 뛰어난 기술력을 한 번에.",
        bro_f1: '감정적 (100% 욕설 포함!)',
        bro_f2: '100% 정확한 출력을 보장하기 위해 노력합니다',
        bro_f3: '트리거: "bro", "man", "哥们"',
        lover_title: 'Lover 모드',
        lover_desc: '따뜻하고 애정 어린 대화를 경험하세요. 욕설 없이 세심한 지원과 기술적 정확성만 제공합니다.',
        lover_f1: '최고의 정서적 가치 제공',
        lover_f2: '욕설 없음',
        lover_f3: '트리거: "亲爱的", "老公", "老婆"',
        examples_title: '작동 방식 보기',
        examples_desc: '다른 모드가 동일한 질문을 어떻게 처리하는지 비교해보세요.',
        ex_user: '"<span class=\'text-yellow-300 font-bold bg-yellow-900/30 px-1 rounded inline-block min-w-[3.5rem] text-center typewriter-bro\'>형제여</span>, 내 코드에서 계속 NullReferenceException이 발생해서 너무 짜증나."',
        ex_bro: '"야 인마, 또 null 체크를 잊었어? 정신 좀 차려! 수정된 코드는 이거야..."',
        ex_lover_user: '"<span class=\'text-yellow-300 font-bold bg-yellow-900/30 px-1 rounded inline-block min-w-[3.5rem] text-center typewriter-lover\'>자기야</span>, 내 코드에서 계속 NullReferenceException이 발생해서 너무 짜증나."',
        ex_lover: '"자기야, 너무 속상해하지 마. Null 참조는 누구에게나 일어나는 일이야! 내가 고치는 걸 도와줄게..."',
        ex_exit_user: '"난 더 이상 <span class=\'text-yellow-300 font-bold bg-yellow-900/30 px-1 rounded\'>네 형제가 아니야</span>, 정상으로 돌아와."',
        ex_exit_ai: '"모드가 비활성화되었습니다. 표준 어시스턴트 모드로 돌아갑니다. 오늘 코드와 관련하여 무엇을 도와드릴까요?"',
        ex_exit_lover_user: '"우리 <span class=\'text-yellow-300 font-bold bg-yellow-900/30 px-1 rounded\'>헤어지자</span>, 정상 AI로 돌아와줘."',
        ex_exit_lover_ai: '"모드가 비활성화되었습니다. 표준 어시스턴트 모드로 돌아갑니다. 다음엔 어떤 작업을 도와드릴까요?"',
        how_title: '작동 원리',
        how_desc: '간단한 네 단계로 시작하세요.',
        step1_title: '1. 설치',
        step1_desc: '빠른 설치 명령어를 사용하여 AI 어시스턴트에 스킬을 추가하세요.',
        step2_title: '2. 트리거',
        step2_desc: '프롬프트에서 특정 트리거 단어를 사용하여 원하는 모드를 활성화하세요.',
        step3_title: '3. 전환/종료',
        step3_desc: '대상 모드의 트리거 단어를 직접 사용하여 자동 전환하거나 정상으로 돌아가도록 요청하여 종료합니다.',
        step4_title: '4. 즐기기',
        step4_desc: 'AI와 더 인간다운 대화를 경험하세요.',
        faq_title: '자주 묻는 질문',
        faq_desc: '질문이 있으신가요? 저희가 답해드립니다.',
        faq1_q: '두 모드를 모두 설치할 수 있나요?',
        faq1_a: '네! 두 모드를 모두 설치하고 각각의 트리거 단어를 사용하여 전환할 수 있습니다.',
        faq2_q: '코드 품질에 영향을 미치나요?',
        faq2_a: '전혀 그렇지 않습니다. 두 모드 모두 대화 톤만 변경하면서 100% 정확한 기술적 출력을 보장하기 위해 노력하도록 설계되었습니다.',
        faq3_q: '모드를 어떻게 종료하나요?',
        faq3_a: 'AI에게 "정상으로 돌아와", "그만해"라고 말하거나 관계를 부정하면(예: "난 네 형제가 아니야", "우리 헤어져") 즉시 해당 모드를 종료하고 표준 모드로 돌아옵니다.',
        disclaimer: '면책 조항: 이러한 AI 성격 모드는 엔터테인먼트 및 다양한 대화 스타일 제공만을 목적으로 합니다. 개발자는 감정적 동요, 코드 손상 또는 갑자기 욕설을 하고 싶은 충동에 대해 책임지지 않습니다. 유머 감각을 가지고 본인의 책임하에 사용하십시오.'
    }
};

/**
 * 语言检测与应用模块
 */
class I18nManager {
    constructor() {
        this.currentLang = 'en';
        this.detectLanguage();
        this.bindEvents();
        this.applyLanguage();
    }

    detectLanguage() {
        const navLang = navigator.language || navigator.userLanguage;
        const exactMatch = Object.keys(i18nData).find(key => navLang.startsWith(key));
        
        if (exactMatch) {
            this.currentLang = exactMatch;
        } else if (navLang.startsWith('zh')) {
            this.currentLang = navLang.includes('TW') || navLang.includes('HK') ? 'zh-TW' : 'zh-CN';
        } else {
            this.currentLang = 'en';
        }
        
        this.updateActiveButton();
    }

    bindEvents() {
        document.querySelectorAll('.lang-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                this.currentLang = e.target.dataset.lang;
                this.updateActiveButton();
                this.applyLanguage();
            });
        });

        const mobileSelect = document.getElementById('lang-select-mobile');
        if (mobileSelect) {
            mobileSelect.addEventListener('change', (e) => {
                this.currentLang = e.target.value;
                this.updateActiveButton();
                this.applyLanguage();
            });
        }
    }

    updateActiveButton() {
        document.querySelectorAll('.lang-btn').forEach(btn => {
            if (btn.dataset.lang === this.currentLang) {
                btn.classList.add('bg-white/10', 'text-white', 'border-white/20');
                btn.classList.remove('text-gray-400', 'border-transparent');
            } else {
                btn.classList.remove('bg-white/10', 'text-white', 'border-white/20');
                btn.classList.add('text-gray-400', 'border-transparent');
            }
        });

        const mobileSelect = document.getElementById('lang-select-mobile');
        if (mobileSelect) {
            mobileSelect.value = this.currentLang;
        }
    }

    applyLanguage() {
        const data = i18nData[this.currentLang] || i18nData['en'];
        
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (key && data[key]) {
                el.innerHTML = data[key];
            }
        });
        
        // Dispatch event for other components to re-initialize if needed
        document.dispatchEvent(new CustomEvent('languageChanged'));
    }
}

/**
 * 安装命令切换模块
 */
class InstallManager {
    constructor() {
        this.bindEvents();
    }

    bindEvents() {
        const btnPnpm = document.getElementById('btn-pnpm');
        const btnNpx = document.getElementById('btn-npx');
        const cmdBro = document.getElementById('cmd-bro');
        const cmdLover = document.getElementById('cmd-lover');
        const cmdUninstall = document.getElementById('cmd-uninstall');

        const setTab = (type) => {
            if (type === 'pnpm') {
                btnPnpm?.classList.replace('bg-transparent', 'bg-white/10');
                btnNpx?.classList.replace('bg-white/10', 'bg-transparent');
                if (cmdBro) cmdBro.textContent = 'pnpm dlx skills add SublimeCT/bro-mode --skills bro-mode';
                if (cmdLover) cmdLover.textContent = 'pnpm dlx skills add SublimeCT/bro-mode --skills lover-mode';
                if (cmdUninstall) cmdUninstall.textContent = 'pnpm dlx skills remove bro-mode lover-mode';
            } else {
                btnNpx?.classList.replace('bg-transparent', 'bg-white/10');
                btnPnpm?.classList.replace('bg-white/10', 'bg-transparent');
                if (cmdBro) cmdBro.textContent = 'npx skills add SublimeCT/bro-mode --skills bro-mode';
                if (cmdLover) cmdLover.textContent = 'npx skills add SublimeCT/bro-mode --skills lover-mode';
                if (cmdUninstall) cmdUninstall.textContent = 'npx skills remove bro-mode lover-mode';
            }
        };

        btnPnpm?.addEventListener('click', () => setTab('pnpm'));
        btnNpx?.addEventListener('click', () => setTab('npx'));

        // Copy buttons logic
        document.querySelectorAll('.copy-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                const codeEl = btn.parentElement.querySelector('code');
                if (codeEl) {
                    navigator.clipboard.writeText(codeEl.textContent || '');
                    const originalHTML = btn.innerHTML;
                    btn.innerHTML = '<svg class="w-4 h-4 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>';
                    setTimeout(() => {
                        btn.innerHTML = originalHTML;
                    }, 2000);
                }
            });
        });
    }
}

/**
 * 滚动动画模块
 */
class ScrollAnimationManager {
    constructor() {
        this.initObserver();
    }

    initObserver() {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                }
            });
        }, { threshold: 0.1 });

        document.querySelectorAll('.reveal').forEach(el => {
            observer.observe(el);
        });
    }
}

/**
 * 打字机效果模块
 */
class TypewriterEffect {
    constructor(el, words, waitTime = 2000) {
        this.el = el;
        this.words = words;
        this.txt = '';
        this.wordIndex = 0;
        this.waitTime = parseInt(waitTime, 10);
        this.type();
        this.isDeleting = false;
    }

    type() {
        const current = this.wordIndex % this.words.length;
        const fullTxt = this.words[current];

        if (this.isDeleting) {
            this.txt = fullTxt.substring(0, this.txt.length - 1);
        } else {
            this.txt = fullTxt.substring(0, this.txt.length + 1);
        }

        this.el.innerHTML = `<span class="wrap">${this.txt}</span>`;

        let typeSpeed = 100;
        if (this.isDeleting) {
            typeSpeed /= 2;
        }

        if (!this.isDeleting && this.txt === fullTxt) {
            typeSpeed = this.waitTime;
            this.isDeleting = true;
        } else if (this.isDeleting && this.txt === '') {
            this.isDeleting = false;
            this.wordIndex++;
            typeSpeed = 300;
        }

        this.timeout = setTimeout(() => this.type(), typeSpeed);
    }
    
    stop() {
        if (this.timeout) {
            clearTimeout(this.timeout);
        }
    }
}

let activeTypewriters = [];

function initTypewriters() {
    // Clear existing
    activeTypewriters.forEach(tw => tw.stop());
    activeTypewriters = [];
    
    const broElements = document.querySelectorAll('.typewriter-bro');
    broElements.forEach(el => {
        activeTypewriters.push(new TypewriterEffect(el, ['哥们', 'bro', '哥們']));
    });

    const loverElements = document.querySelectorAll('.typewriter-lover');
    loverElements.forEach(el => {
        activeTypewriters.push(new TypewriterEffect(el, ['老公', '老婆', '亲爱的', 'honey']));
    });
}

// 初始化
document.addEventListener('DOMContentLoaded', () => {
    new I18nManager();
    new InstallManager();
    new ScrollAnimationManager();
    
    document.addEventListener('languageChanged', () => {
        initTypewriters();
    });
    
    // Initial call just in case languageChanged wasn't caught
    initTypewriters();
});
