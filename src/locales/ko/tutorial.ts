import { SimpleTranslationEntries } from "#app/plugins/i18n";

export const tutorial: SimpleTranslationEntries = {
    "intro": `포켓로그에 오신 것을 환영합니다! 이 게임은 로그라이트 요소가 있는 전투 중심의 포켓몬 팬게임입니다.
    $이 게임은 수익을 창출하지 않으며 우리는 포켓몬이나 사용된 저작권 자산의 소유권을 주장하지 않습니다.
    $이 게임은 진행 중이지만, 완전히 플레이할 수 있습니다.\n버그 보고의 경우, Discord 커뮤니티를 사용하세요.
    $게임이 느리다면, 브라우저 설정에서 '하드웨어 가속'이 켜져 있는지 확인하세요.`,
    
    "accessMenu": `메뉴를 열려면 M 또는 Escape를 누르세요.\n메뉴에는 설정과 다양한 기능이 포함되어 있습니다.`,
    
    "menu": `이 메뉴에서 설정에 접근할 수 있습니다.
    $설정에서 게임 속도, 창 스타일 및 기타 옵션을 변경할 수 있습니다.
    $여기에는 다양한 다른 기능도 있으니, 모두 확인해 보세요!`,

    "starterSelect": `이 화면에서 스타팅 포켓몬을 선택할 수 있습니다.\n이 포켓몬들은 당신의 초기 파티 멤버입니다.
    $각 포켓몬에는 가치가 있습니다. 당신의 파티는 총 10명을 초과하지 않는 한 최대 6명의 멤버를 가질 수 있습니다.
    $또한 당신이 잡거나 부화한 포켓몬에 따라 성별, 능력 및 형태를 선택할 수 있습니다.
    $포켓몬의 능력치는 부화하거나 잡은 포캣몬의 모든 능력치 중 최고이므로, 같은 포켓몬을 많이 잡으려고 노력하세요!`,

    "pokerus": `매일 무작위로 3마리의 스타팅 포켓몬이 포켓러스에 감염됩니다, 이 포켓몬들은 보라색 테두리를 가지고 있습니다.
    $만약 포켓러스에 감염된 포켓몬을 본다면,\n당신의 파티에 추가해 보세요. 개요를 꼭 확인하세요!`,

    "statChange": `포켓몬이 교체되지 않는 한 능력치 변화는 지속됩니다.
    $능력치 초기화는 포켓몬은 트레이너 전투 전과 새로운 필드에 들어가기 전에 초기화 됩니다.
    $C버튼 또는 Shift를 눌러 필드에서 포켓몬의 능력치 변경 사항을 볼 수도 있습니다.`,

    "selectItem": `모든 전투 후에, 당신은 3개의 무작위 아이템을 선택할 수 있습니다.\n당연히 하나만 선택할 수 있습니다.
    이것들은 소모품부터 지닌물건, 패시브 아이템에 이르기까지 다양합니다.
    대부분의 비소모품 효과는 다양한 방식으로 쌓일 것입니다.
    $일부 항목은 진화 항목과 같이 사용할 수 있는 경우에만 표시됩니다.
    $또한 전송 옵션을 사용하여 포켓몬 간에 아이템을 전송할 수 있습니다.
    $보류된 아이템을 얻으면 이체 옵션이 오른쪽 하단에 나타납니다.
    $당신은 돈으로 소모품을 구매할 수 있으며, 더 많이 얻을수록 더 다양한 것을 사용할 수 있습니다.
    $무작위 아이템을 선택하면 바로 다음 전투로 진행되기 때문에, 무작위 아이템을 선택하기 전에 반드시 필요한 아이템을 구매하세요.`,

    "eggGacha": `이 화면에서, 포켓몬 알 교환권을 사용할 수 있습니다.
    $알은 모든 전투가 끝난 뒤 부화되며, 부화에 가까워 집니다. 희귀한 알은 부화하는 데 더 오래 걸립니다.
    $부화돤 포켓몬은 파티에 추가되지 않으며, 도감에 추가될 것입니다.
    $알에서 부화한 포켓몬은 일반적으로 야생 포켓몬보다 더 나은 IV를 가지고 있습니다.
    $일부 포켓몬은 알에서만 얻을 수 있습니다.
    $다양한 보너스로 가져올 수 있는\n3개의 다른 기계가 있으니, 필요한 것을 고르세요!`,
} as const;