import React from "react";
import { MenuItem, Text, Icon, Stack, Badge } from "reshaped";
import IconArrowRight from "icons/ArrowRight";
import * as T from "./Header.types";
import s from "./Header.module.css";

const HeaderNavItem = (props: T.NavItemProps) => {
  const { title, description, href, image: Image, badge } = props;
  const endSlot = (
    <Icon svg={IconArrowRight} className={s.icon} color="primary" size={4} />
  );
  const startSlot = (
    <div className={s.image}>
      <Image />
    </div>
  );

  return (
    <MenuItem
      startSlot={startSlot}
      endSlot={endSlot}
      className={s.navItem}
      href={href}
      size="large"
    >
      <Stack gap={1}>
        <Stack direction="row" gap={2} align="center">
          <Text variant="body-strong-2" className={s.title}>
            {title}
          </Text>
          {badge && (
            <Badge color="primary" variant="faded">
              {badge}
            </Badge>
          )}
        </Stack>
        <Text variant="body-2" as="p">
          {description}
        </Text>
      </Stack>
    </MenuItem>
  );
};

export default HeaderNavItem;
