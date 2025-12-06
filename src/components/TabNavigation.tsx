import type { TabKey } from "../types/TabKey";

interface TabItem {
    id: TabKey;
    label: string;
    icon: React.ElementType;
    isActive?: boolean;
}

interface TabNavigationProps {
    tabs: TabItem[];
    onTabClick?: (tabId: TabKey) => void;
}

export const TabNavigation = ({ tabs, onTabClick }: TabNavigationProps) => {
    return (
        <div className="tab-navigation-container">
            <ul className="tab-navigation-scroll">
                {tabs.map((tab) => (
                    <li
                        key={tab.id}
                        className={`tab-navigation-item ${tab.isActive ? 'active' : ''}`}
                        onClick={() => onTabClick?.(tab.id)}
                    >
                        <tab.icon isActive={tab.isActive} />
                        <span className="tab-navigation-label">{tab.label}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
};