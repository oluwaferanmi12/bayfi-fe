"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

type RouteMeta = {
  title: string;
  description: string;
};

const APP_NAME = "Bayfi";
const DEFAULT_META: RouteMeta = {
  title: "Digital Finance Platform",
  description:
    "Trade gift cards and crypto, transfer funds, and manage digital transactions with Bayfi.",
};

const ROUTE_META: Record<string, RouteMeta> = {
  "/": {
    title: "Home",
    description:
      "Trade gift cards and crypto, pay bills, and manage digital transactions on Bayfi.",
  },
  "/about": {
    title: "About",
    description: "Learn more about Bayfi, our mission, vision, and team.",
  },
  "/contact-us": {
    title: "Contact Us",
    description: "Reach out to Bayfi for product questions, support, and help.",
  },
  "/what-we-do": {
    title: "What We Do",
    description:
      "Explore Bayfi services including gift card trading, crypto trade, and bill payments.",
  },
  "/updates": {
    title: "Updates",
    description: "Read recent product and company updates from Bayfi.",
  },
  "/legal": {
    title: "Legal",
    description: "Read Bayfi terms of use and privacy policy.",
  },
  "/login": {
    title: "Login",
    description: "Sign in to your Bayfi account.",
  },
  "/register": {
    title: "Register",
    description: "Create a Bayfi account to start trading and transacting.",
  },
  "/otp": {
    title: "OTP Verification",
    description: "Verify your account with a one-time password.",
  },
  "/onboarding": {
    title: "Onboarding",
    description: "Complete your Bayfi onboarding steps.",
  },
  "/create-pin": {
    title: "Create PIN",
    description: "Set your secure transaction PIN.",
  },
  "/forgot-password": {
    title: "Forgot Password",
    description: "Recover access to your Bayfi account.",
  },
  "/forgot-password/verify-otp": {
    title: "Verify OTP",
    description: "Verify OTP to continue password reset.",
  },
  "/forgot-password/reset": {
    title: "Reset Password",
    description: "Create a new password for your Bayfi account.",
  },
  "/junk": {
    title: "Auth",
    description: "Authentication flow page.",
  },
  "/dashboard": {
    title: "Dashboard",
    description: "View wallet balance, quick actions, and recent activity.",
  },
  "/profile": {
    title: "Profile",
    description: "Manage your profile, security settings, KYC, and legal info.",
  },
  "/services": {
    title: "Services",
    description: "Explore Bayfi products and service offerings.",
  },
  "/support": {
    title: "Support",
    description: "Get support and help for your Bayfi account.",
  },
  "/transaction": {
    title: "Transactions",
    description: "Review your transaction history and statuses.",
  },
  "/withdrawal": {
    title: "Withdraw",
    description: "Withdraw funds to your selected bank account.",
  },
  "/m-transaction": {
    title: "Mobile Transactions",
    description: "View mobile transaction history and details.",
  },
  "/profile-setting": {
    title: "Profile Settings",
    description: "Manage account profile settings on mobile.",
  },
  "/security-setting": {
    title: "Security Settings",
    description: "Manage password, PIN, and other security options.",
  },
  "/password-setting": {
    title: "Password Settings",
    description: "Update your account password.",
  },
  "/tier-details": {
    title: "Tier Details",
    description: "View account tier information and limits.",
  },
  "/more": {
    title: "More",
    description: "Access additional account actions and pages.",
  },
  "/other-services": {
    title: "Other Services",
    description: "Discover additional services available on Bayfi.",
  },
  "/complete-kyc": {
    title: "Complete KYC",
    description: "Complete identity verification to unlock more features.",
  },
  "/m-legal": {
    title: "Mobile Legal",
    description: "View legal information on mobile.",
  },
  "/m-legal/terms": {
    title: "Terms and Conditions",
    description: "Read Bayfi terms and conditions.",
  },
  "/m-legal/privacy": {
    title: "Privacy Policy",
    description: "Read Bayfi privacy policy.",
  },
  "/deposit-crypto": {
    title: "Deposit Crypto",
    description: "Deposit crypto into your Bayfi wallet.",
  },
  "/buy-crypto": {
    title: "Buy Crypto",
    description: "Buy cryptocurrency from your Bayfi account.",
  },
  "/buy-crypto-form": {
    title: "Crypto Purchase Form",
    description: "Fill in crypto purchase details.",
  },
  "/buy-airtime": {
    title: "Buy Airtime",
    description: "Top up airtime quickly from your Bayfi account.",
  },
  "/buy-data": {
    title: "Buy Data",
    description: "Purchase mobile data bundles from Bayfi.",
  },
  "/buy-cable": {
    title: "Buy Cable",
    description: "Pay for cable TV subscriptions.",
  },
  "/betting": {
    title: "Betting",
    description: "Fund betting wallets from your Bayfi account.",
  },
  "/select-preferred-network": {
    title: "Select Network",
    description: "Select your preferred service network.",
  },
  "/m-chat": {
    title: "Messages",
    description: "View and manage your support and trade chats.",
  },
  "/m-chat/chat": {
    title: "Chat",
    description: "Continue your conversation in chat.",
  },
  "/hot-card-deals": {
    title: "Hot Card Deals",
    description: "Browse hot gift card deals and rates.",
  },
  "/giftcard": {
    title: "Gift Card",
    description: "Buy or sell gift cards on Bayfi.",
  },
  "/giftcard/buy-details": {
    title: "Gift Card Purchase Details",
    description: "Review gift card purchase details.",
  },
  "/giftcard/chat": {
    title: "Gift Card Chat",
    description: "Chat regarding a gift card transaction.",
  },
  "/pin-setup": {
    title: "PIN Setup",
    description: "Set up your transaction PIN.",
  },
  "/pin-setup/change-pin": {
    title: "Change PIN",
    description: "Change your transaction PIN securely.",
  },
};

const upsertMetaTag = (
  selector: string,
  value: string,
  attribute: "name" | "property",
) => {
  let tag = document.querySelector(`meta[${attribute}='${selector}']`);
  if (!tag) {
    tag = document.createElement("meta");
    tag.setAttribute(attribute, selector);
    document.head.appendChild(tag);
  }
  tag.setAttribute("content", value);
};

const getFallbackTitle = (pathname: string) => {
  if (!pathname || pathname === "/") return DEFAULT_META.title;
  const lastSegment = pathname
    .split("/")
    .filter(Boolean)
    .pop()
    ?.replace(/[-_]/g, " ");
  if (!lastSegment) return DEFAULT_META.title;
  return lastSegment.charAt(0).toUpperCase() + lastSegment.slice(1);
};

const resolveMeta = (pathname: string): RouteMeta => {
  const normalizedPath =
    pathname.length > 1 && pathname.endsWith("/")
      ? pathname.slice(0, -1)
      : pathname;

  if (normalizedPath.startsWith("/m-transaction/")) {
    return {
      title: "Transaction Details",
      description: "View detailed information for this transaction.",
    };
  }

  return (
    ROUTE_META[normalizedPath] ?? {
      title: getFallbackTitle(normalizedPath),
      description: DEFAULT_META.description,
    }
  );
};

export const RouteMetaManager = () => {
  const pathname = usePathname();

  useEffect(() => {
    const meta = resolveMeta(pathname || "/");
    const fullTitle = `${meta.title} | ${APP_NAME}`;

    document.title = fullTitle;
    upsertMetaTag("description", meta.description, "name");
    upsertMetaTag("og:title", fullTitle, "property");
    upsertMetaTag("og:description", meta.description, "property");
    upsertMetaTag("twitter:title", fullTitle, "name");
    upsertMetaTag("twitter:description", meta.description, "name");
  }, [pathname]);

  return null;
};
